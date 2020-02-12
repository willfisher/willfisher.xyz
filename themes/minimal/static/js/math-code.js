window.MathJax = {
    tex: {
        tags: 'ams'
    }
};

(function() {
    var i, text, code, codes = document.getElementsByTagName('code');
    for (i = 0; i < codes.length;) {
        code = codes[i];
        if (code.parentNode.tagName !== 'PRE' && code.childElementCount === 0) {
            text = code.textContent;
            if (/^\$[^$]/.test(text) && /[^$]\$$/.test(text)) {
                text = text.replace(/^\$/, '\\(').replace(/\$$/, '\\)');
                code.textContent = text;
            }
            if (/^\\\((.|\s)+\\\)$/.test(text) || /^\\\[(.|\s)+\\\]$/.test(text) ||
                /^\$(.|\s)+\$$/.test(text) ||
                /^\\begin\{([^}]+)\}(.|\s)+\\end\{[^}]+\}$/.test(text)) {
                    code.outerHTML = code.innerHTML;  // remove <code></code>
                    continue;
            }
        }
        i++;
    }
})();

var envs = ["theorem", "proposition", "lemma", "corollary", "remark", "definition"];
var i18n = {
    "theorem" : {
        "en" : "Theorem",
        "fr" : "Théorème",
        "es" : "Teorema"
    },
    "proposition" : {
        "en" : "Proposition",
        "fr" : "Proposition",
        "es" : "Proposición"
    },
    "lemma" : {
        "en" : "Lemma",
        "fr" : "Lemme",
        "es" : "Lema"
    },
    "corollary" : {
        "en" : "Corollary",
        "fr" : "Corollaire",
        "es" : "Corolario"
    },
    "remark" : {
        "en" : "Remark",
        "fr" : "Remarque",
        "es" : "Nota"
    },
    "definition" : {
        "en" : "Definition",
        "fr" : "Définition",
        "es" : "Definición"
    }
}
function translate(value) {
    return i18n[value][document.documentElement.lang];
}

(function() {
    var counter = {};

    for(var i = 0; i < envs.length; i++) {
        counter[envs[i]] = 1;
    }

    envs.forEach(function(env) {
        var nodes = document.getElementsByClassName(env);
        for(let node of nodes) {
            var header = translate(env) + " " + counter[env] + (node.hasAttribute("name") ? " (" + node.getAttribute("name") + ")" : "") + ".";
            node.innerHTML = "<span class='math-header'>" + header + "</span>" + " " + node.innerHTML;
            counter[env] += 1;
        }
    });
})();

class EqRef extends HTMLElement {
    constructor() {
        super();
        this._refid = null;
    }

    static get observedAttributes() { return ["refid"]; }

    attributeChangedCallback(name, oldValue, newValue) {
        this._refid = newValue;
        this._updateLink();
    }
    connectedCallback() {
        this._updateLink();
    }

    get refid() {
        return this._refid;
    }
    set refid(v) {
        this.setAttribute("refid", v);
    }

    _updateLink() {
        var reference = document.getElementById(this.refid);
        var components = reference.innerText.split(" ");
        var link = components[0] + " " + components[1];
        link = link.replace(/\./g, "");
        this.innerHTML = '<a href="#' + this.refid + '">' + link + '</a>';
    }
}
customElements.define('eq-ref', EqRef);

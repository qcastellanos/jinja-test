function {{ resource }} () {
    {% for attrib in attribs -%}
        this.{{ attrib }} = "{{ attrib }}";
    {% endfor %}
    
    this.toString = function() {
        return "*********************************************************" 
        + "\n {{ resource|upper }}:"  
            {% for attrib in attribs -%} 
                + "\n*  " + "{{ attrib }}: " + this.{{ attrib }}
            {% endfor -%}
        + "\n*********************************************************"
    }
}

module.exports = {{ resource }};
let arcadeTab = {
    DOM: document.getElementById('arcade-tab'),
    checked: false,
    checkTab: function (){
        let dom = this.DOM;
        let checker = this.checked;
        if (!checker){
            dom.addEventListener('click', () =>{
                dom.style.backgroundColor = "hsl(206, 94%, 87%)";
                dom.style.borderColor = "hsl(243, 100%, 62%)";
                this.checked = !(this.checked);
            })
        }
        else {
            dom.style.borderColor = "hsl(231, 11%, 63%)";
            dom.style.backgroundColor = "hsl(0, 0%, 100%)";
        }
    }
}
let advanceTab = {
    "DOM": document.getElementById('advanced-tab'),
    checked: false,
    checkTab: function (){
        let dom = this.DOM;
        let checker = this.checked;
        if (!checker){
            dom.addEventListener('click', () =>{
                dom.style.backgroundColor = "hsl(206, 94%, 87%)";
                dom.style.borderColor = "hsl(243, 100%, 62%)";
                this.checked = !(this.checked);
            })
        }
        else {
            dom.style.borderColor = "hsl(231, 11%, 63%)";
            dom.style.backgroundColor = "hsl(0, 0%, 100%)";
        }
    }
}
let proTab = {
    "DOM": document.getElementById('pro-tab'),
    checked: false,
    checkTab: function (){
        let dom = this.DOM;
        let checker = this.checked;
        if (!checker){
            dom.addEventListener('click', () =>{
                dom.style.backgroundColor = "hsl(206, 94%, 87%)";
                dom.style.borderColor = "hsl(243, 100%, 62%)";
                this.checked = !(this.checked);
            })
        }
        else {
            dom.style.borderColor = "hsl(231, 11%, 63%)";
            dom.style.backgroundColor = "hsl(0, 0%, 100%)";
        }
    }
}

arcadeTab.checkTab();
advanceTab.checkTab();
proTab.checkTab();

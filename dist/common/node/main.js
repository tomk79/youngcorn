module.exports=new function(){var t=require(__dirname+"/../../../package.json"),i=require("fs"),n=require("desktop-utils"),r=t.name,e={};this.initDataDir=function(){var t=this.getLocalDataDir();return(i.existsSync(t)||i.mkdirSync(t))&&i.existsSync(t)?!0:!1},this.getLocalDataDir=function(){return n.getLocalDataDir(r)},this.open=n.open,this.getDb=function(t){return t=t||function(){},t(e),this},this.setDb=function(t,i){return i=i||function(){},e=t,i(!0),this},this.loadDb=function(t){if(t=t||function(){},!this.initDataDir())return t(!1),this;var n=this.getLocalDataDir(),r=n+"/db.json";return i.existsSync(r)?(e=require(r),t(e),this):(t({}),this)},this.saveDb=function(t){if(t=t||function(){},!this.initDataDir())return t(!1),this;var n=this.getLocalDataDir(),r=n+"/db.json";return i.writeFile(r,JSON.stringify(e,null,1),function(i){t(!i)}),this}};
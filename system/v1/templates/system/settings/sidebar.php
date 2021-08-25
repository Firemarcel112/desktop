<div id="sidebar">
    <a onclick="w_start()" id="starts"><img src="/../system/v1/standardbilder/apps/settings.png"><span id="start_d">Start</span></a>
    <a onclick="w_inst()" id="installiert"><img src="/../system/v1/standardbilder/apps/apps.png"><span id="apps_d">Apps</span></a>
    <a onclick="w_acc()" id="benutzer"><img src="/../system/v1/standardbilder/apps/settings.png"><span id="allgemein_d">Benutzer</span></a>
    <a onclick="w_pers()" id="personalisierung"><img src="/../system/v1/standardbilder/apps/personalization.png"><span id="pers_d">Personal<br>isierung</span></a>
    <a onclick="w_sysinfo()" id="systeminfo"><img src="/../system/v1/standardbilder/apps/systeminfo.png"><span id="sys_d">Systeminfo</span></a>
</div>
<script>
    function w_start() {
        window.location = "/../system/v1/systemapps/settings/"
    }

    function w_acc() {
        window.location = "/../system/v1/systemapps/settings/account";
    }

    function w_inst() {
        window.location = "/../system/v1/systemapps/settings/installed_apps";
    }

    function w_pers() {
        window.location = "/../system/v1/systemapps/settings/personalisation";
    }

    function w_sysinfo() {
        window.location = "/../system/v1/systemapps/settings/systeminfo"
    }
</script>
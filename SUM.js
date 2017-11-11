function $SUM(name,uid) {
    var app = this;
    app.name = name;
    app.uid = uid || "username";
    if (localStorage.getItem("uid") != null) {
        app.uid = localStorage.getItem("uid");
    }
    function hash(str) {
        var Sha256 = function () { function r() { } return r.hash = function (n, t) { function e(r) { try { return (new TextEncoder).encode(r, "utf-8").reduce(function (r, n) { return r + String.fromCharCode(n) }, "") } catch (n) { return unescape(encodeURIComponent(r)) } } function o(r) { var n = r.replace(" ", ""); return "" == n ? "" : n.match(/.{2}/g).map(function (r) { return String.fromCharCode(parseInt(r, 16)) }).join("") } var a = { msgFormat: "string", outFormat: "hex" }, u = Object.assign(a, t); switch (u.msgFormat) { default: case "string": n = e(n); break; case "hex-bytes": n = o(n) }var c = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], f = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]; n += String.fromCharCode(128); for (var i = n.length / 4 + 2, h = Math.ceil(i / 16), R = new Array(h), g = 0; h > g; g++) { R[g] = new Array(16); for (var s = 0; 16 > s; s++)R[g][s] = n.charCodeAt(64 * g + 4 * s + 0) << 24 | n.charCodeAt(64 * g + 4 * s + 1) << 16 | n.charCodeAt(64 * g + 4 * s + 2) << 8 | n.charCodeAt(64 * g + 4 * s + 3) << 0 } var v = 8 * (n.length - 1) / Math.pow(2, 32), C = 8 * (n.length - 1) >>> 0; R[h - 1][14] = Math.floor(v), R[h - 1][15] = C; for (var g = 0; h > g; g++) { for (var d = new Array(64), m = 0; 16 > m; m++)d[m] = R[g][m]; for (var m = 16; 64 > m; m++)d[m] = r.a1(d[m - 2]) + d[m - 7] + r.a0(d[m - 15]) + d[m - 16] >>> 0; for (var O = f[0], T = f[1], l = f[2], w = f[3], A = f[4], p = f[5], j = f[6], y = f[7], m = 0; 64 > m; m++) { var M = y + r.a1(A) + r.Ch(A, p, j) + c[m] + d[m], S = r.a0(O) + r.Maj(O, T, l); y = j, j = p, p = A, A = w + M >>> 0, w = l, l = T, T = O, O = M + S >>> 0 } f[0] = f[0] + O >>> 0, f[1] = f[1] + T >>> 0, f[2] = f[2] + l >>> 0, f[3] = f[3] + w >>> 0, f[4] = f[4] + A >>> 0, f[5] = f[5] + p >>> 0, f[6] = f[6] + j >>> 0, f[7] = f[7] + y >>> 0 } for (var y = 0; y < f.length; y++)f[y] = ("00000000" + f[y].toString(16)).slice(-8); var x = "hex-w" == u.outFormat ? " " : ""; return f.join(x) }, r.ROTR = function (r, n) { return n >>> r | n << 32 - r }, r.a0 = function (n) { return r.ROTR(2, n) ^ r.ROTR(13, n) ^ r.ROTR(22, n) }, r.a1 = function (n) { return r.ROTR(6, n) ^ r.ROTR(11, n) ^ r.ROTR(25, n) }, r.a0 = function (n) { return r.ROTR(7, n) ^ r.ROTR(18, n) ^ n >>> 3 }, r.a1 = function (n) { return r.ROTR(17, n) ^ r.ROTR(19, n) ^ n >>> 10 }, r.Ch = function (r, n, t) { return r & n ^ ~r & t }, r.Maj = function (r, n, t) { return r & n ^ r & t ^ n & t }, r }();
        return new Sha256().__proto__.constructor.hash(str);
    }
    function react(reaction, data, message) {
        if (reaction) {
            if (typeof reaction == "string") {
                window.location.href = reaction;
            } else if (typeof reaction == "function") {
                reaction(data, message);
            }
        }
    }
    app.users = (function(){
        function dataGroup(name, KVPS) { if (this.dataSystem = KVPS, this.name = name, null == this.dataSystem.get(name)) { var setup = new Array; this.dataSystem.set(name, JSON.stringify(setup)) } this.debug = !1, this.add = function (e) { var t = JSON.parse(this.dataSystem.get(this.name)); t.push(e), this.dataSystem.set(this.name, JSON.stringify(t)), this.debug === !0 && console.log(this.name + " -> add: Object successfully added!") }, this.exists = function (e, t) { var s = JSON.parse(this.dataSystem.get(this.name)); if (s.length > 0) { for (var o = 0; o < s.length; o++) { var n = s[o]; if (n[e] == t) return this.debug === !0 && console.log(this.name + " -> exists: returned true"), !0 } this.dataSystem.set(this.name, JSON.stringify(s)) } else this.debug === !0 && console.log(this.name + " -> exists: No objects are stored!") }, this.edit = function (e, t, s, o) { var n = JSON.parse(this.dataSystem.get(this.name)); if (n.length > 0) { for (var i = 0; i < n.length; i++) { var a = n[i]; a[e] == t && (this.debug === !0 && (console.log(this.name + " -> edit: Object before - "), console.log(a)), a[s] = o, this.debug === !0 && (console.log(this.name + " -> edit: Object after - "), console.log(a)), n[i] = a, this.debug === !0 && console.log(this.name + " -> edit: Object saved!")) } this.dataSystem.set(this.name, JSON.stringify(n)) } else this.debug === !0 && console.log(this.name + " -> edit: No objects are stored!") }, this.remove = function (e, t) { var s = JSON.parse(this.dataSystem.get(this.name)); if (s.length > 0) { for (var o = 0; o < s.length; o++) { var n = s[o]; n[e] == t && (this.debug === !0 && (console.log(this.name + " -> remove: Object matched for removal -"), console.log(n)), s.splice(o, 1), this.debug === !0 && console.log(this.name + " -> remove: Object deleted!")) } this.dataSystem.set(this.name, JSON.stringify(s)) } else this.debug === !0 && console.log(this.name + " -> remove: No objects are stored!") }, this.get = function (e, t) { for (var s = JSON.parse(this.dataSystem.get(this.name)), o = 0; o < s.length; o++) { var n = s[o]; if (n[e] == t) return this.debug === !0 && (console.log(this.name + " -> get: Object found! "), console.log(n)), n } return this.debug === !0 && console.log(this.name + " -> get: Object not found!"), s.length < 1 && this.debug === !0 && console.log(this.name + " -> get: No objects, with the property of " + e + ", matched " + t), null }, this.listAll = function () { var e = JSON.parse(this.dataSystem.get(this.name)); return e.length < 1 && this.debug === !0 && console.log(this.name + " -> listAll: There are no stored objects to return!"), this.debug === !0 && (console.log(this.name + " -> listAll: Objects were found!"), console.log(e)), e }, this.clear = function () { this.dataSystem.clear() }, this.where = function (e, t) { for (var s = new Array, o = JSON.parse(this.dataSystem.get(this.name)), n = 0; n < o.length; n++) { var i = o[n]; i[e] == t && (this.debug === !0 && (console.log(this.name + " -> search: Object matched - "), console.log(i)), s.push(i)) } return s.length < 1 && this.debug === !0 && console.log(this.name + " -> search: No objects, with the property of " + e + ", matched " + t), this.debug === !0 && (console.log(this.name + " -> search: Final result - "), console.log(s)), s } } 
        return new dataGroup(
            name+"-app-data",
            { set: function (a, b) { return localStorage.setItem(a, b); }, get: function (a) { return localStorage.getItem(a); } }
        );
    })();
    app.register = function (data, done, fail) {
        if (data[app.uid]) {
            if (data.password) {
                if (!app.users.exists(app.uid, data[app.uid])) {
                    data.password = hash(data.password)
                    app.users.add(data);
                    sessionStorage.setItem(name + "-current-user", data[app.uid]);
                    react(done, data);
                } else {
                    react(fail, data, "That "+app.uid+" is already in use!");
                }
            } else {
                react(fail, data, "Invalid submission. Password required.");
                throw new Error(name+" -> Register: 'password' is a required property");
            }
        } else {
            react(fail, data, "Invalid submission. "+app.uid+" required.");
            throw new Error(name+" -> Register: "+app.uid+" must be defined.")
        }
    };
    app.update = function (data, id, finished) {
        for (var k in data) {
            if (k == "password") {
                app.users.edit(app.uid, id, k, hash(data[k]));
            } else {
                app.users.edit(app.uid, id, k, data[k]);
            }
        }
        react(finished, data, "Successfully updated user!");
    };
    app.auth = function (data, done, fail) {
        if (data[app.uid]) {
            if (data.password) {
                if (app.users.exists(app.uid, data[app.uid])) {
                    if (app.users.get(app.uid,data[app.uid]).password==hash(data.password)) {
                        react(done, data);
                    } else {
                        react(fail, data, "Incorrect password!");
                    }
                } else {
                    react(fail, data, "User does not exist!");
                }
            } else {
                react(fail, data, "Invalid authentication attempt. Password required.");
                throw new Error(name + " -> Auth: 'password' is a required property");
            }
        } else {
            react(fail, data, "Invalid authentication attempt. " + app.uid + " required.");
            throw new Error(name + " -> Auth: " + app.uid + " must be defined.")
        }
    };
    app.login = function (data, done, fail) {
        app.auth(data, function(data){
            sessionStorage.setItem(name+"-current-user",data[app.uid]);
            react(done, data, "Login successfull!");
        }, function(data) {
            react(fail, data, "Login failed!");
        });
    };
    app.logout = function (done) {
        sessionStorage.removeItem(name+"-current-user");
        window.location.href = done;
    };
    app.loggedInAs = function () {
        return sessionStorage.getItem(name+"-current-user") || "User";
    };
    app.loggedIn = function () {
        return sessionStorage.getItem(name + "-current-user") != null ? true : false;
    };
    app.currentUser = function () {
        return app.users.get(app.uid,app.loggedInAs());
    };
    app.getProfilePictureData = function (uid) {
        return localStorage.getItem(name + "-profilepic-" + (!!uid?uid:app.loggedInAs()))||false;
    };
    app.getForm = function (form) { //returns an object of form elements with names (or IDs) as property names and the values of the elements as the values of the properties.
        var response = {};
        var elements = form.elements;
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].tagName == "INPUT" || elements[i].tagName == "SELECT" || elements[i].tagName == "TEXTAREA") {
                var backup = elements[i].tagName + Math.floor(Math.random() * 500);
                var title = elements[i].name != "" ? elements[i].name : (elements[i].id != "" ? elements[i].id : backup);
                var val = elements[i].value;
                if (!elements[i].tagName == "INPUT" && !elements[i].type == "submit") {
                    elements[i].value = "";
                }
                response[title] = val;
            }
        }
        return response;
    }
}

// HTML implementation

(function(w){
    var app = new $SUM("defaultApp");
    if (!!document.querySelectorAll("html")[0].getAttribute("require-login")) {
        if (!app.loggedIn()) {
            window.location.href = document.querySelectorAll("html")[0].getAttribute("require-login");
        }
    }
    var forms = document.querySelectorAll("form");
    forms.forEach(function(e) {
        e.addEventListener("submit", function (e2) {
            if (e.getAttribute("type")==="login") {
                e2.preventDefault();
                var id = e.getAttribute("uid");
                if (id != null) {
                    app.uid = id;
                    localStorage.setItem("uid",id);
                }
                var formData = app.getForm(e);
                app.login(
                    formData,
                    e.getAttribute("on-success") || window.location.href,
                    e.getAttribute("on-fail") || window.location.href
                );
            }
            if (e.getAttribute("type") === "signup") {
                e2.preventDefault();
                var id = e.getAttribute("uid");
                if (id != null) {
                    app.uid = id;
                    localStorage.setItem("uid", id);
                }
                var formData = app.getForm(e);
                app.register(
                    formData,
                    e.getAttribute("on-success") || window.location.href,
                    e.getAttribute("on-fail") || window.location.href
                );
            }
            if (e.getAttribute("type") === "update") {
                e2.preventDefault();
                var formData = app.getForm(e);
                app.update(
                    formData,
                    app.loggedInAs(),
                    e.getAttribute("on-success") || window.location.href
                );
            }
        });
        if (e.getAttribute("type") === "update") {
            var user = app.currentUser();
            for (var k in user) {
                e.querySelectorAll("#"+k+", [name='"+k+"']").forEach(function (a) {
                    if (k != "password") {
                        a.setAttribute("value",user[k]);
                    }
                });
            }
        }
    });
    // Logout elements
    var logout = document.querySelectorAll("[logout]");
    logout.forEach(function (e) {
        e.addEventListener("click", function(e2) {
            app.logout(e.getAttribute("logout")||"index.html");
        });
    });
    // Dynamic html tags
    var user = app.currentUser();
    for (var k in user) {
        var elem = document.querySelectorAll(k);
        console.log("element: ", elem);
        elem.forEach(function (e){
            e.innerHTML = user[k];
        });
    }
    // Upload Profile Picture
    var uploaders = document.querySelectorAll("[upload='profile-pic']");
    //HTML: <input type="file" accept="image/*" onchange="uploadProfilePic('ImageTagId',event,"username","userAccountSystemName");">
    //This function uploads an image and saves it as the profile picture for the user that is logged in, and then it sets an image tag to the profile picture (in order to update the current profile picture)
    var uploadProfilePic = function (event) {
        var input = event.target;
        var reader = new FileReader();
        reader.onload = function () {
            var dataURL = reader.result;
            localStorage.setItem(app.name + "-profilepic-" + app.loggedInAs(), dataURL);
            //Update profile pics
            var pics = document.querySelectorAll("[profile-pic]");
            pics.forEach(function(e){
                e.setAttribute("src",dataURL);
            });
        };
        reader.readAsDataURL(input.files[0]);
    };
    uploaders.forEach(function(e){
        e.setAttribute("type","file");
        e.setAttribute("accept","image/*");
        e.addEventListener("change", function (event){
            uploadProfilePic(event);
        });
    });
    // Display Profile Picture
    var pics = document.querySelectorAll("[profile-pic]");
    pics.forEach(function (e) {
        e.setAttribute("src", 
            app.getProfilePictureData(
                !!e.getAttribute("profile-pic") ? e.getAttribute("profile-pic") : app.loggedInAs()
            )
        );
    });
    
    // Uncomment the line of code below to make app a global variable
    w.app = app;
})(window);
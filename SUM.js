function SUM(config,run) {
    var app = this;
    config = config || {};
    app.name = config.name || "defaultApp";
    app.uid = config.uid || "username";
    if (localStorage.getItem(app.name+"uid") != null) {
        app.uid = localStorage.getItem(app.name+"uid");
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
                var response = {data:data, message: message};
                reaction(response);
            }
        }
    }
    app.Q = function (s) {
        return document.querySelectorAll(s);
    };
    app.extentions = null;
    app.files = null;
    app.users = (function(){
        function dataGroup(name) {
            this.name = name;
            this.dataSystem = { 
                set: function (a, b) { 
                    return localStorage.setItem(a, b); 
                }, get: function (a) { 
                    return localStorage.getItem(a); 
                } 
            };
            if (this.name = name, null == this.dataSystem.get(name)) {
                var setup = new Array;
                this.dataSystem.set(name, JSON.stringify(setup))
            }
            this.debug = false;
            this.add = function (e) {
                var t = JSON.parse(this.dataSystem.get(this.name));
                t.push(e), this.dataSystem.set(this.name, JSON.stringify(t)), this.debug === !0 && console.log(this.name + " -> add: Object successfully added!")
            }, 
            this.exists = function (e, t) {
                var s = JSON.parse(this.dataSystem.get(this.name));
                if (s.length > 0) {
                    for (var o = 0; o < s.length; o++) {
                        var n = s[o];
                        if (n[e] == t) return this.debug === !0 && console.log(this.name + " -> exists: returned true"), !0
                    }
                    this.dataSystem.set(this.name, JSON.stringify(s))
                } else this.debug === !0 && console.log(this.name + " -> exists: No objects are stored!");
            }, 
            this.edit = function (e, t, s, o) {
                var n = JSON.parse(this.dataSystem.get(this.name));
                if (n.length > 0) {
                    for (var i = 0; i < n.length; i++) {
                        var a = n[i];
                        a[e] == t && (this.debug === !0 && (console.log(this.name + " -> edit: Object before - "), console.log(a)), a[s] = o, this.debug === !0 && (console.log(this.name + " -> edit: Object after - "), console.log(a)), n[i] = a, this.debug === !0 && console.log(this.name + " -> edit: Object saved!"))
                    }
                    this.dataSystem.set(this.name, JSON.stringify(n))
                } else this.debug === !0 && console.log(this.name + " -> edit: No objects are stored!")
            },
            this.remove = function (e, t) {
                var s = JSON.parse(this.dataSystem.get(this.name));
                if (s.length > 0) {
                    for (var o = 0; o < s.length; o++) {
                        var n = s[o];
                        n[e] == t && (this.debug === !0 && (console.log(this.name + " -> remove: Object matched for removal -"), console.log(n)), s.splice(o, 1), this.debug === !0 && console.log(this.name + " -> remove: Object deleted!"))
                    }
                    this.dataSystem.set(this.name, JSON.stringify(s))
                } else this.debug === !0 && console.log(this.name + " -> remove: No objects are stored!")
            }, 
            this.get = function (e, t) {
                for (var s = JSON.parse(this.dataSystem.get(this.name)), o = 0; o < s.length; o++) {
                    var n = s[o];
                    if (n[e] == t) return this.debug === !0 && (console.log(this.name + " -> get: Object found! "), console.log(n)), n
                }
                return this.debug === !0 && console.log(this.name + " -> get: Object not found!"), s.length < 1 && this.debug === !0 && console.log(this.name + " -> get: No objects, with the property of " + e + ", matched " + t), null
            }, 
            this.listAll = function () {
                var e = JSON.parse(this.dataSystem.get(this.name));
                return e.length < 1 && this.debug === !0 && console.log(this.name + " -> listAll: There are no stored objects to return!"), this.debug === !0 && (console.log(this.name + " -> listAll: Objects were found!"), console.log(e)), e
            },
            this.clear = function () {
                this.dataSystem.clear()
            },
            this.update = function (ky,v,data) {
                for (var k in data) {
                    this.edit(ky, v, k, data[k]);
                }
            },
            this.where = function (e, t) {
                for (var s = new Array, o = JSON.parse(this.dataSystem.get(this.name)), n = 0; n < o.length; n++) {
                    var i = o[n];
                    i[e] == t && (this.debug === !0 && (console.log(this.name + " -> search: Object matched - "), console.log(i)), s.push(i))
                }
                return s.length < 1 && this.debug === !0 && console.log(this.name + " -> search: No objects, with the property of " + e + ", matched " + t), this.debug === !0 && (console.log(this.name + " -> search: Final result - "), console.log(s)), s
            },
            this.filter = function (filter) {
                return this.listAll().filter(filter);
            };
        }
        app.files = new dataGroup(app.name + "-files");
        app.extentions = new dataGroup(app.name + "-extensions");
        return new dataGroup(app.name + "-app-data");
    })();
    app.extentions.Update = function(data) {
        app.extentions.update("name",data.name,data);
    }
    app.event = (function eventSystem(){
        var events = {};
        var event = function (...nameSpaces) {
            var single = nameSpaces.length === 1;
            var eventName = ([...nameSpaces]).join("/");
            if(!events.hasOwnProperty(eventName)){
                events[eventName]=[];
            }
            return {
                listen: function(reaction){
                    events[eventName].push(reaction);
                    return reaction;
                },
                broadcast: function(...data){
                    for (var k in events) {
                        if (single) {
                            if (k === eventName || k.match(eventName+"/") !== null) {
                                events[k].forEach(function(event){
                                    event(...data);
                                });
                            }
                        } else {
                            if (k.match(eventName) !== null) {
                                events[k].forEach(function(event){
                                    event(...data);
                                });
                            }
                        }
                    }
                },
                stopListening: function(reaction){
                    for (var k in events) {
                        if (k.match(eventName) !== null) {
                            for(var i in events[eventName]){
                                if(reaction.toString()==events[eventName][i].toString()){
                                    events[eventName].splice(i,1);
                                }
                            }
                        }
                    }
                }
            };
        };
        return event;
    })();
    app.signup = function (data, done, fail) {
        if (data[app.uid]) {
            if (data.password) {
                if (!app.users.exists(app.uid, data[app.uid])) {
                    data.password = hash(data.password);
                    data.joinedOn = new Date();
                    data.lastUpdated = new Date();
                    data.guid = btoa("" + Math.random() * 1000000000000);
                    app.users.add(data);
                    sessionStorage.setItem(name + "-current-user", data.guid);
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
    app.update = function (data, guid, finished) {
        for (var k in data) {
            if (k == "password") {
                app.users.edit("guid", guid, k, hash(data[k]));
            } else {
                app.users.edit("guid", guid, k, data[k]);
            }
        }
        app.users.edit(app.uid, id, "lastUpdated", new Date());
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
            var user = app.users.get(app.uid, data.data[app.uid]);
            sessionStorage.setItem(name + "-current-user", user.guid);
            react(done, data.data, "Login successfull!");
        }, function(data) {
            react(fail, data.data, "Login failed!");
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
        return app.users.get("guid",app.loggedInAs());
    };
    app.deleteUserAccount = function (data, done, fail) {
        app.auth(data, function (data) {
            sessionStorage.setItem(name + "-current-user", data.data[app.uid]);
            app.users.remove(app.uid, data[app.uid]);
            react(done, data.data, "User deleted!");
        }, function (data) {
            react(fail, data.data, "User does not exist!");
        });
    };
    app.getProfilePictureData = function (uid) {
        return localStorage.getItem(app.name + "-profilepic-" + (!!uid?uid:app.loggedInAs()))||false;
    };
    app.reset = function () {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = window.location.href;
    };
    app.setSecurityQuestion = function (question, answer) {
        var guid = app.loggedInAs();
        if (guid) {
            app.users.update("guid", guid, "SQ", question);
            app.users.update("guid", guid, "SQA", hash(answer));
            return true;
        } else return false;
    };
    app.forgotPassword = function (uid, securityQuestionAnswer, newPassword, done, fail) {
        if (app.users.exists(app.uid, uid)) {
            var user = app.users.get(app.uid, uid);
            if (user.SQA === hash(securityQuestionAnswer)) {
                app.users.update(app.uid, uid, "password", newPassword);
                user = app.users.get(app.uid, uid);
                react(done, user, "Successfully changed password!");
            } else {
                react(fail, {}, "Wrong answer.");
            }
        } else {
            react(fail, {}, "That "+app.uid+" isn't used in this application.");
        }
    };
    app.getForm = function (form) { //returns an object of form elements with names (or IDs) as property names and the values of the elements as the values of the properties.
        var response = {}, elements = form.elements;
        for (var i in elements) {
            var element = elements[i], tagName = elements[i].tagName, name = elements[i].name;
            if (tagName == "INPUT" || tagName == "SELECT" || tagName == "TEXTAREA") {
                var backup = tagName + i;
                var title = !!name ? name : (element.id || backup);
                if (!title.toLowerCase().match("submit") && !title.toLowerCase().match("confirm")) {
                    response[title] = element.value;
                }
            }
        }
        return response;
    };
    app.newComponent = function (name, selector, operation, description) {
        var elements = app.Q(selector);
        elements.forEach(function(element) {
            operation(element);
        });
        var extension = {
            name: name,
            id: btoa(name + selector + Math.floor(Math.random()*1000)),
            selector: selector,
            operation: operation.toString(),
            description: description || ""
        };
        if (!app.extentions.exists("name",name)) {
            app.extentions.add(extension);
        } else if (app.extentions.exists("name",name)) {
            app.extentions.Update(extension);
        }
    };
    app.generateView = function(element, data, template) {
        var template = !!template ? template : element.innerHTML || "";
        element.innerHTML = "";
        data = data || [];
        data.forEach(function (u) {
            var temp = template;
            for (var k in u) {
                temp = temp.split("$" + k).join(u[k]);
            }
            element.innerHTML += temp;
        });
    };
    app.parseURL = function (char) {
        var url = window.location.href, data = {};
        char = !!char ? char === "?" || char === "#" ? char : "check" : "check";
        if (char === "check") {
            char = url.includes("?") ? "?" : url.includes("#") ? "#" : false;
            if (char === false) { return false; }
        }
        url = url.substring(url.indexOf(char) + 1, url.length);
        if (url.includes("=")) {
            var kv = url.split("&");
            kv.forEach(function (e) {
                data[e.split("=")[0]] = e.split("=")[1];
            });
            return kv[0].split("=").length > 1 ? data : url;
        }
        return url;
    };
    app.searchContext = function(name,element) {
        var html = element || document.body.innerHTML;
        var url = window.location.href;
        var title = document.querySelector("title");
        title = title!=null?title.innerHTML:"";
        function includes(str, str2) {
            str = str.toLowerCase();
            return str.replace(str2.toLowerCase(),"") != str;
        }
        return includes(url,name) || includes(html,name) || includes(title,name);
    };
    app.run = function () {
        function fileInfo () {
            var url = window.location.href;
            url = url.split("/");
            var folder = url[url.length - 2];
            url = url[url.length - 1];
            url = url.split("#")[0];
            var name = url.split("?")[0];
            return {name: name, folder: folder, forms: ""};
        }
        var currentFile = fileInfo();
        function updateFileInfo(key,value) {
            if (!app.files.exists("name", currentFile.name)) {
                app.files.add(currentFile);
            } else {
                app.files.edit("name", currentFile.name, key, value);
            }
        }
        updateFileInfo("folder",currentFile.folder);
        var forms = [];
        app.newComponent("from-url","[from-url]", function (e) {
            var str = e.getAttribute("from-url");
            var kv = str.split(/\s/).join("").split(",");
            var urlData = app.parseURL();
            kv.forEach(function(e2){
                var t = e2.split(":");
                if (t[0] == "text") {
                    e.innerHTML = urlData[t[1]];
                } else {
                    e.setAttribute(t[0],urlData[t[1]]);
                }
            });
        }, "Set attributes to values defined in the URL. Syntax: \"attribute: value, attribute: value\".");
        var FORMS = document.querySelectorAll("form");
        FORMS.forEach(function (e) {
            var formType = e.getAttribute("type");
            if (formType == null && FORMS.length === 1) {
                if (app.searchContext("login") || app.searchContext("signin")) {
                    formType = "login"; console.log("Deduced: ",formType);
                } else if (app.searchContext("singup") || app.searchContext("register")) {
                    formType = "signup"; console.log("Deduced: ",formType);
                } else if (app.searchContext("update") || app.searchContext("change")) {
                    formType = "update"; console.log("Deduced: ",formType);
                } else return; //If SUM has no idea what the form is supposed to do then forget it
            }
            if (formType === "signup") {
                localStorage.setItem(name+"-blueprint",JSON.stringify(app.getForm(e)));
            }
            e.addEventListener("submit", function (e2) {
                var formData = app.getForm(e);
                var id = e.getAttribute("uid");
                if (id != null) {
                    app.uid = id;
                    localStorage.setItem(app.name+"uid", id);
                }
                if (formType === "login" || formType === "signup") {
                    e2.preventDefault();
                    app[formType](
                        formData,
                        e.getAttribute("on-success") || window.location.href,
                        e.getAttribute("on-fail") || window.location.href
                    );
                } else if (formType === "update") {
                    e2.preventDefault();
                    app.update(
                        formData,
                        app.loggedInAs(),
                        e.getAttribute("on-success") || window.location.href
                    );
                }
            });
            if (formType === "update") { //Prefill update form
                var user = app.currentUser();
                for (var k in user) {
                    e.querySelectorAll("#" + k + ", [name='" + k + "']").forEach(function (a) {
                        if (k != "password") {
                            a.setAttribute("value", user[k]);
                        }
                    });
                }
            }
            var fields = [];
            var f = app.getForm(e);
            for (var k in f) { fields.push(k); }
            forms.push({type: formType, fields: fields});
        });
        updateFileInfo("forms", JSON.stringify(forms));
        // Logout elements
        app.newComponent("Logout", "[logout]", function (e) {
            e.addEventListener("click", function (e2) {
                app.logout(e.getAttribute("logout") || window.location.href);
            });
        }, "Logout the user when clicked.");
        // 
        app.newComponent("Delete User", "[delete-user-account]", function(e){
            app.deleteUserAccount(
                !!e.getAttribute("delete-user-account") ? e.getAttribute("delete-user-account") : app.loggedInAs(),
                e.getAttribute("on-success") || window.location.href,
                e.getAttribute("on-fail") || window.location.href
            );
        }, "Delete user account when clicked.");
        // Dynamic html tags
        var user = app.currentUser();
        for (var k in user) {
            app.newComponent(k, k, function (e) {
                e.innerHTML = user[k];
            }, "Display "+k+" value of the user that is logged in.");
        }
        app.newComponent("Display Users", "users", function(e){
            app.generateView(e,app.users.listAll());
        }, "For each user, display the innerHTML of the given element after replacing each $propertyName with its value.");
        app.newComponent("App name", "app-name", function (e) {
            e.innerHTML = app.name;
        }, "Display app name.");
        // Upload Profile Picture
        //HTML: <input type="file" accept="image/*" onchange="uploadProfilePic('ImageTagId',event,"username","userAccountSystemName");">
        //This function uploads an image and saves it as the profile picture for the user that is logged in, and then it sets an image tag to the profile picture (in order to update the current profile picture)
        var uploadProfilePic = function (event) {
            var input = event.target;
            var reader = new FileReader();
            reader.onload = function () {
                var dataURL = reader.result;
                localStorage.setItem(app.name + "-profilepic-" + app.loggedInAs(), dataURL); // Save image in localStorage
                //Update profile pics
                var pics = document.querySelectorAll("[profile-pic=''], [profile-pic='"+app.loggedInAs()+"']");
                pics.forEach(function (e) {
                    e.setAttribute("src", dataURL);
                });
            };
            reader.readAsDataURL(input.files[0]);
        };
        app.newComponent("Upload Profile Picture", "[upload='profile-pic']", function (e) {
            e.setAttribute("type", "file");
            e.setAttribute("accept", "image/*");
            e.addEventListener("change", function (event) {
                uploadProfilePic(event);
            });
        }, "Set up the given input element to upload the profile picture for the user that is logged in.");
        // Display Profile Picture
        app.newComponent("Display Profile Picture", "[profile-pic]", function (e) {
            var src = e.getAttribute("profile-pic");
            if (app.getProfilePictureData(
                !!e.getAttribute("profile-pic") ? e.getAttribute("profile-pic") : app.loggedInAs()
            )) {
                e.setAttribute("src",
                    app.getProfilePictureData(
                        !!e.getAttribute("profile-pic") ? e.getAttribute("profile-pic") : app.loggedInAs()
                    )
                );
            }
        }, "Display profile picture for the user that is specified, or if set to nothing the user that is logged in.");
    }
    if (!!app.Q("html")[0].getAttribute("require-login")) {
        if (!app.loggedIn()) {
            window.location.href = !!config.loggedOut ? config.loggedOut : app.Q("html")[0].getAttribute("require-login");
        }
    }
    if (!!app.Q("html")[0].getAttribute("logged-in")) {
        if (app.loggedIn()) {
            window.location.href = !!config.loggedIn ? config.loggedIn : app.Q("html")[0].getAttribute("logged-in");
        }
    };
    if (run === undefined) {
        this.run();
    }
}

window.app = new SUM(); // Init default app
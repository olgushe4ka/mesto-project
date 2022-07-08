(()=>{"use strict";function e(e){e.classList.add("popup_opened"),document.addEventListener("keydown",o)}function t(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",o)}function o(e){"Escape"===e.key&&t(document.querySelector(".popup_opened"))}var r=document.querySelector(".edit-form__field_title"),n=document.querySelector(".edit-form__field_link"),c=document.querySelector(".edit-form__create-button"),u=document.querySelector(".popup-photo"),i=document.querySelector(".edit-form__save-button"),a=document.querySelector(".edit-form__save-button-ava"),d=document.querySelector(".photo-grid");function l(e){e.target.classList.toggle("photo-grid__heart_black")}function s(t,o,r){var n="cfeadf371bd6f2b05e606f17"!==t.owner._id,c=function(t,o,r,n,c,i){var a=document.querySelector("#photo-grid").content.querySelector(".photo-grid__item").cloneNode(!0),d=a.querySelector(".photo-grid__photo");return a.querySelector(".photo-grid__photo").src=o,a.querySelector(".photo-grid__name").textContent=t,a.querySelector(".photo-grid__counter").textContent=r.length,a.querySelector(".photo-grid__photo").alt=n,a.querySelector(".photo-grid__heart").addEventListener("click",l),c?a.querySelector(".photo-grid__delite-button").remove():a.querySelector(".photo-grid__delite-button").addEventListener("click",(function(e){var t;(t=i,fetch("https://nomoreparties.co/v1/plus-cohort-13/cards/".concat(t),{method:"DELETE",headers:{authorization:"cec4068b-d318-4572-975e-c977f41c2ea2"}})).then((function(t){t.ok&&e.target.parentElement.remove()}))})),d.addEventListener("click",(function(){document.querySelector(".popup-photo__photo").src=o,document.querySelector(".popup-photo__title").textContent=t,e(u)})),a}(t.name,t.link,t.likes,void 0,n,t._id);r?o.prepend(c):o.append(c)}function p(e,t,o){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(o.inactiveButtonClass),t.disabled=!1):(t.classList.add(o.inactiveButtonClass),t.disabled=!0)}var f,m=document.querySelector(".profile__edit-button"),_=document.querySelector(".popup-profile"),v=document.querySelector(".popup-edit"),h=document.querySelector(".popup__close-icon"),y=document.querySelector(".profile__plus-button"),S=document.querySelector(".edit-popup__close-icon"),q=document.querySelector(".photo-popup__close-icon"),b=document.querySelector(".edit-form__field_name"),E=document.querySelector(".edit-form__field_position"),L=document.querySelector(".profile__position"),C=document.querySelector(".profile__name"),g=document.querySelector(".popup-photo"),k=document.querySelector(".card-form"),x=document.querySelector(".profile-form"),j=document.querySelectorAll(".popup"),A=document.querySelector(".profile__avatar-box"),T=document.querySelector(".popup-avatar-edit"),z=document.querySelector(".profile__avatar"),P=document.querySelector(".avatar-form"),B=document.querySelector(".avatar-form__field_link"),w=document.querySelector(".popup__close-icon-ava");m.addEventListener("click",(function(){e(_)})),y.addEventListener("click",(function(){e(v)})),A.addEventListener("click",(function(){e(T)})),h.addEventListener("click",(function(){t(_)})),S.addEventListener("click",(function(){t(v)})),q.addEventListener("click",(function(){t(g)})),w.addEventListener("click",(function(){t(T)})),fetch("https://nomoreparties.co/v1/plus-cohort-13/cards",{headers:{authorization:"cec4068b-d318-4572-975e-c977f41c2ea2"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){e.forEach((function(e){s(e,d)}))})),k.addEventListener("submit",(function(){var e,o;(e=r.value,o=n.value,fetch("https://nomoreparties.co/v1/plus-cohort-13/cards",{method:"POST",headers:{authorization:"cec4068b-d318-4572-975e-c977f41c2ea2","Content-Type":"application/json"},body:JSON.stringify({name:e,link:o})})).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){s(e,d,!0),r.value="",n.value="",t(v),c.disabled=!0}))})),fetch("https://nomoreparties.co/v1/plus-cohort-13//users/me",{headers:{authorization:"cec4068b-d318-4572-975e-c977f41c2ea2"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){C.textContent=e.name,L.textContent=e.about,z.src=e.avatar,b.value=e.name,E.value=e.about})),x.addEventListener("submit",(function(){var e,o,r,n;e=b.value,o=E.value,C.textContent=e,L.textContent=o,r=b.value,n=E.value,fetch("https://nomoreparties.co/v1/plus-cohort-13/users/me",{method:"PATCH",headers:{authorization:"cec4068b-d318-4572-975e-c977f41c2ea2","Content-Type":"application/json"},body:JSON.stringify({name:r,about:n})}),b.value="",E.value="",t(_),i.disabled=!0})),P.addEventListener("submit",(function(){var e,o;e=B.value,z.src=e,o=B.value,fetch("https://nomoreparties.co/v1/plus-cohort-13/users/me/avatar",{method:"PATCH",headers:{authorization:"cec4068b-d318-4572-975e-c977f41c2ea2","Content-Type":"application/json"},body:JSON.stringify({avatar:o})}),B.value="",t(T),a.disabled=!0})),f={inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active",inputSelector:".form__input",submitButtonSelector:".form__submit",formSelector:".form",formSetClass:".form__set",inactiveButtonClass:"button_inactive"},Array.from(document.querySelectorAll(f.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),Array.from(e.querySelectorAll(f.formSetClass)).forEach((function(e){!function(e,t){var o=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);p(o,r,t),o.forEach((function(n){n.addEventListener("input",(function(){!function(e,t,o){t.validity.valid?function(e,t,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(o.inputErrorClass),r.classList.remove(o.errorClass),r.textContent=""}(e,t,o):function(e,t,o,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),n.textContent=o,n.classList.add(r.errorClass)}(e,t,t.validationMessage,o)}(e,n,t),p(o,r,t)}))}))}(e,f)}))})),j.forEach((function(e){e.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t(e.target.closest(".popup"))}))}))})();
(()=>{"use strict";function e(e){e.classList.add("popup_opened"),document.addEventListener("keydown",o)}function t(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",o)}function o(e){"Escape"===e.key&&t(document.querySelector(".popup_opened"))}var r=document.querySelector(".edit-form__field_title"),n=document.querySelector(".edit-form__field_link"),c=document.querySelector(".edit-form__create-button"),i=document.querySelector(".popup-photo"),u=(document.querySelector(".edit-form__save-button"),document.querySelector(".edit-form__save-button-ava")),a="cfeadf371bd6f2b05e606f17",s=document.querySelector(".photo-grid");function l(t,o,r,n,c,u,a){var s=document.querySelector("#photo-grid").content.querySelector(".photo-grid__item").cloneNode(!0),l=s.querySelector(".photo-grid__photo");return s.querySelector(".photo-grid__photo").src=o,s.querySelector(".photo-grid__name").textContent=t,s.querySelector(".photo-grid__counter").textContent=r.length,s.querySelector(".photo-grid__photo").alt=n,a&&s.querySelector(".photo-grid__heart").classList.add("photo-grid__heart_black"),s.querySelector(".photo-grid__heart").addEventListener("click",(function(e){!function(e,t){var o=e.target.classList.contains("photo-grid__heart_black")?function(e){return fetch("https://nomoreparties.co/v1/plus-cohort-13/cards/likes/".concat(e),{method:"DELETE",headers:{authorization:"cec4068b-d318-4572-975e-c977f41c2ea2"}})}(t):function(e){return fetch("https://nomoreparties.co/v1/plus-cohort-13/cards/likes/".concat(e),{method:"PUT",headers:{authorization:"cec4068b-d318-4572-975e-c977f41c2ea2"}})}(t);o.then((function(e){if(e.ok)return e.json()})).then((function(t){e.target.parentElement.querySelector(".photo-grid__counter").textContent=t.likes.length,e.target.classList.toggle("photo-grid__heart_black")}))}(e,u)})),c?s.querySelector(".photo-grid__delite-button").remove():s.querySelector(".photo-grid__delite-button").addEventListener("click",(function(e){var t;(t=u,fetch("https://nomoreparties.co/v1/plus-cohort-13/cards/".concat(t),{method:"DELETE",headers:{authorization:"cec4068b-d318-4572-975e-c977f41c2ea2"}})).then((function(t){t.ok&&e.target.parentElement.remove()}))})),l.addEventListener("click",(function(){document.querySelector(".popup-photo__photo").src=o,document.querySelector(".popup-photo__title").textContent=t,e(i)})),s}function d(e,t,o){var r=e.owner._id!==a,n=void 0!==e.likes.find((function(e){return e._id===a})),c=l(e.name,e.link,e.likes,void 0,r,e._id,n);o?t.prepend(c):t.append(c)}function p(e,t,o){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(o.inactiveButtonClass),t.disabled=!1):(t.classList.add(o.inactiveButtonClass),t.disabled=!0)}var f,m=document.querySelector(".profile__edit-button"),_=document.querySelector(".popup-profile"),h=document.querySelector(".popup-edit"),v=document.querySelector(".popup__close-icon"),y=document.querySelector(".profile__plus-button"),S=document.querySelector(".edit-popup__close-icon"),q=document.querySelector(".photo-popup__close-icon"),b=document.querySelector(".edit-form__field_name"),E=document.querySelector(".edit-form__field_position"),L=document.querySelector(".profile__position"),g=document.querySelector(".profile__name"),k=document.querySelector(".popup-photo"),C=document.querySelector(".card-form"),x=document.querySelector(".profile-form"),j=document.querySelectorAll(".popup"),A=document.querySelector(".profile__avatar-box"),T=document.querySelector(".popup-avatar-edit"),z=document.querySelector(".profile__avatar"),P=document.querySelector(".avatar-form"),B=document.querySelector(".avatar-form__field_link"),w=document.querySelector(".popup__close-icon-ava");function N(e,t){t.querySelector(".form__submit").textContent=e?"Сохранение...":"Сохранить"}m.addEventListener("click",(function(){e(_)})),y.addEventListener("click",(function(){e(h)})),A.addEventListener("click",(function(){e(T)})),v.addEventListener("click",(function(){t(_)})),S.addEventListener("click",(function(){t(h)})),q.addEventListener("click",(function(){t(k)})),w.addEventListener("click",(function(){t(T)})),fetch("https://nomoreparties.co/v1/plus-cohort-13/cards",{headers:{authorization:"cec4068b-d318-4572-975e-c977f41c2ea2"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){e.forEach((function(e){d(e,s)}))})),C.addEventListener("submit",(function(){var e,o;N(!0,C),(e=r.value,o=n.value,fetch("https://nomoreparties.co/v1/plus-cohort-13/cards",{method:"POST",headers:{authorization:"cec4068b-d318-4572-975e-c977f41c2ea2","Content-Type":"application/json"},body:JSON.stringify({name:e,link:o})})).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){d(e,s,!0)})).finally((function(){N(!1,C)})),r.value="",n.value="",t(h),c.disabled=!0})),fetch("https://nomoreparties.co/v1/plus-cohort-13//users/me",{headers:{authorization:"cec4068b-d318-4572-975e-c977f41c2ea2"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){g.textContent=e.name,L.textContent=e.about,z.src=e.avatar,b.value=e.name,E.value=e.about})),x.addEventListener("submit",(function(){var e,o,r,n;N(!0,x),e=b.value,o=E.value,g.textContent=e,L.textContent=o,(r=b.value,n=E.value,fetch("https://nomoreparties.co/v1/plus-cohort-13/users/me",{method:"PATCH",headers:{authorization:"cec4068b-d318-4572-975e-c977f41c2ea2","Content-Type":"application/json"},body:JSON.stringify({name:r,about:n})})).finally((function(){t(_),N(!1,x)}))})),P.addEventListener("submit",(function(){var e,o;N(!0,P),e=B.value,z.src=e,(o=B.value,fetch("https://nomoreparties.co/v1/plus-cohort-13/users/me/avatar",{method:"PATCH",headers:{authorization:"cec4068b-d318-4572-975e-c977f41c2ea2","Content-Type":"application/json"},body:JSON.stringify({avatar:o})})).finally((function(){t(T),B.value="",N(!1,P)})),u.disabled=!0})),f={inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active",inputSelector:".form__input",submitButtonSelector:".form__submit",formSelector:".form",formSetClass:".form__set",inactiveButtonClass:"button_inactive"},Array.from(document.querySelectorAll(f.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),Array.from(e.querySelectorAll(f.formSetClass)).forEach((function(e){!function(e,t){var o=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);p(o,r,t),o.forEach((function(n){n.addEventListener("input",(function(){!function(e,t,o){t.validity.valid?function(e,t,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(o.inputErrorClass),r.classList.remove(o.errorClass),r.textContent=""}(e,t,o):function(e,t,o,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),n.textContent=o,n.classList.add(r.errorClass)}(e,t,t.validationMessage,o)}(e,n,t),p(o,r,t)}))}))}(e,f)}))})),j.forEach((function(e){e.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t(e.target.closest(".popup"))}))}))})();
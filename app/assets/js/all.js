const replyBtn=document.querySelector(".replyBtn");
const ckEditor=document.querySelector( '#editor' );

replyBtn.addEventListener("click",function (e) {
    ClassicEditor.create(ckEditor)
})

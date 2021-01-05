function adminPage()
{
    location.href="admin.html";
}
function adminCoursePage()
{
    location.href="courseAdmin.html"
}
function userAdminPage()
{
    location.href="userAdmin.html"
}
function initEvens() {
    // Gán các sự kiện:
    $('#btnAdd').click(function () {
        dialog.dialog('open');
    })

    $('#btnCancel').click(function () {
        dialog.dialog('close');
    })
 
    //$('#tbListData').on('dblclick', 'tr', function () {
    //    alert('á');
    //})

    $('#tbListData').on('dblclick', 'tr', function () {
        // load dữ liệu chi tiết:

        // Hiển thị dialog thông tin chi tiết:
        dialog.dialog('open');
    })
}
$('.modal-dragable').draggable({
    handle: ".modal-header"
  });
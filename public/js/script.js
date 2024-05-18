$(function () {
  $(".tombolTambahData").on("click", function () {
    $("#judulModal").html("Tambah data mahasiswa");
    $(".modal-footer button[type=submit]").html("Tambah Data");
  });

  $(".tampilModalEdit").on("click", function () {
    $("#judulModal").html("Edit data mahasiswa");
    $(".modal-footer button[type=submit]").html("Edit Data");
    $(".modal-body form").attr(
      "action",
      "http://localhost/mvcphp/public/mahasiswa/ubah"
    );

    const id = $(this).data("id");
    $.ajax({
      url: "http://localhost/mvcphp/public/mahasiswa/getubah",
      data: { id: id },
      method: "post",
      dataType: "json",
      success: function (data) {
        $("#nama").val(data.nama);
        $("#nim").val(data.nim);
        $("#email").val(data.email);
        $("#jurusan").val(data.jurusan);
        $("#id").val(data.id);
      },
    });
  });
});

<script>
function ysYonlendir(ID, adres, saniye) {
 if (saniye == 0) {
    window.location.href = adres;
    return;
  }
  document.getElementById(ID).innerHTML = ((saniye/60)/60).toFixed(0);
  saniye--;
  setTimeout(function() {
    ysYonlendir(ID, adres, saniye);
  }, 1000);
}
</script>
<script>
  ysYonlendir("uyari", "logout.php?x=", 28800);
</script>

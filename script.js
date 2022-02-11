$('.file-manager-leftside li').on('click', function(e) {
  e.stopPropagation();
  $('.file-manager-leftside').find('li.active').removeClass('active');
  $(this).first().addClass('active');
});

$('.file-manager-leftside li > .list-holder .fa').on('click', function(e) {
  e.stopPropagation();
  if ($(this).hasClass('fa-chevron-right')) {
    $(this).removeClass('fa-chevron-right').addClass('fa-chevron-down');
    $(this).parents('.list-holder').next('ul').addClass('expanded');
  } else if ($(this).hasClass('fa-chevron-down')) {
    $(this).removeClass('fa-chevron-down').addClass('fa-chevron-right');
    $(this).parents('.list-holder').next('.expanded').removeClass('expanded');
  }
});
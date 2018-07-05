$(showMarkdown).on('click', function() {
  console.log('已添加')
  $(main).addClass('active')
})
$(hideMarkdown).on('click', function() {
  $(main).removeClass('active')
})

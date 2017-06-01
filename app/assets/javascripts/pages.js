
function jsTest() {
  document.getElementById('js-test').style.color ='red';
}

function showBio() {
  document.getElementById('bio').style.display = '';
    document.getElementById('projects').style.display ='none';
  document.getElementById('blog').style.display ='none';
  document.getElementById('contact').style.display ='none';
  $("iframe").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
  });
}

function showProjects() {
  document.getElementById('projects').style.display = '';
  document.getElementById('projects').style.opacity = 1;
  document.getElementById('blog').style.display ='none';
  document.getElementById('contact').style.display ='none';
  document.getElementById('bio').style.display ='none';
}

function showBlog() {
  document.getElementById('projects').style.display ='none';
  document.getElementById('blog').style.display = '';
  document.getElementById('contact').style.display ='none';
  document.getElementById('bio').style.display ='none';
  $("iframe").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
  });
}

function showContact() {
  document.getElementById('projects').style.display ='none';
  document.getElementById('blog').style.display ='none';
  document.getElementById('contact').style.display = '';
  document.getElementById('bio').style.display ='none';
  $("iframe").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
  });
}
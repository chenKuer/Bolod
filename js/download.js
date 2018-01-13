// 提示用户下载系统
  function download(){
        showDiv('download-window');
      };
 function showDiv(divName){

      	var divName=divName;
		window.parent.document.getElementById(divName).style.display="block";
      }

  function showDivTool(divName){
      var divName=divName;
		document.getElementById(divName).style.display="block";
      }

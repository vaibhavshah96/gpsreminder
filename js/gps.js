function w3_open() {
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
}

function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}





$(document).ready(function() {
    $("#flip").click(function(ev) {

        $("#panel").slideToggle("slow");
    });
});

$(document).ready(function() {
    $("#flip1").click(function() {
        $("#panel1").slideToggle("slow");
    });
});

$(document).ready(function() {
    $("#flip2").click(function() {
        $("#panel2").slideToggle("slow");
    });
});
/* for search */
function myFunction() {

    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }

}

$(document).ready(function() {
    $(function() {
        $('#datetimepicker1').datetimepicker({
                    defaultDate: "11/1/2013",
                    
                });
    });
    $(function() {
        $('#datetimepicker3').datetimepicker({
            format: 'LT',

        });
    });

     $(function() {
        $('#datetimepicker19').datetimepicker({
        	defaultDate: "11/1/2013",
        });
    });
    $(function() {
        $('#datetimepicker39').datetimepicker({
            format: 'LT'
        });


    });
    // $(function () {
    //     $("input").attr('disabled','disabled');
    // });
    // $(function () {

    // $("input").removeAttr('disabled');
    // });

     

});

function disable() {
    document.getElementById("clock").disabled = true;
    document.getElementById("calendar").disabled = true;
}

function enable() {
    document.getElementById("clock").disabled = false;
    document.getElementById("calendar").disabled = false;
}

// function disable1() {
//     document.getElementById("clock2").disabled = true;
//     document.getElementById("calendar2").disabled = true;
// }

// function enable1() {
//     document.getElementById("clock2").disabled = false;
//     document.getElementById("calendar2").disabled = false;
// }

$(function() {
    $('#datetimepicker12').datetimepicker({
        inline: true,
        sideBySide: false
    });
});

function clickcolor(color, ev) {
	//ev.stopPropogation();
	ev.cancelBubble = true;
    document.getElementById("tick").style.color = color;
}

function clickcolor1(color,ev) {
	ev.cancelBubble = true;
    document.getElementById("tick1").style.color = color;

}
$(document).ready(function() {
    $("#alert").hide();
    $("#tick").on('click', function() {
               $("#alert").show();

        window.setTimeout(function() {
            $("#alert").hide();
        }, 2000);
    });

});

$(document).ready(function() {
    $("#alert").hide();
    $("#tick1").on('click', function() {

         $("#alert").show();

        window.setTimeout(function() {
            $("#alert").hide();
        }, 2000);
    });

});


// $(document).ready(function() {
//     $("#alert1").hide();
//     $("#tick1").on('click', function() {
//         $("#alert1").show();
//         window.setTimeout(function() {
//             $("#alert1").hide();
//         }, 2000);
//     });

// });

$(document).ready(function() {
    $("#myUL").hide();
    $("#myInput").on('click', function() {
        $("#myUL").show();

    });

});

$(function() {
    $('#datetimepicker23').datetimepicker({
        inline: true,
        sideBySide: false
    });

});



$(function() {
    $('#datetimepicker100').datetimepicker({
    	inline: true,
        sideBySide: false
    });

    $("#datetimepicker100").on("dp.change", function (e) {
    		console.log("date changed");
    		var newDate = $('#datetimepicker100').data("DateTimePicker").date();
    		console.log(newDate);

    		if(moment(newDate).isSame('2017-6-28')) {
    		alert("you have to go to far placeS");
    		}

    		
    	});



 
            $('#datetimepicker12').datetimepicker({
                inline: true,
                sideBySide: false
            });
        });


// $(document).ready(function() {
//     $('#name').on('onchange', function() {
//         alert($('#name').val());
//         //alert(txt);
//     });
// });

// // function myFunction111(){
// // 	console.log($('#name111'));
// // }
// // console.log("here")

// function datefunc(){
// 	var x=$("#date1").value;
// 	console.log(x);

// }
    
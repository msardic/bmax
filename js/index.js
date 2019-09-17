$(function () {
    $.getJSON("https://msardic.github.io/bmax/json/header.json",

        function (result) {
            $(".firstText").append(result.headerTitle);
            $(".firstText").append(result.headerTitleStrong);
            $(".secondText").append(result.headerParagraph);

        }

    )

});

$(function () {
    $.getJSON("https://msardic.github.io/bmax/json/content.json",

        function (result) {
            $(".textContent1 p:nth-child(1)").append(result.contentTitle);

            $(".textContent1 p:nth-child(2)").append(result.contentParagraph);

        }

    )

});


//    $(function () {
//     $.getJSON("https://msardic.github.io/bmax/json/insuranceType.json",

//         function (result) {

//             $.each(json, function(i, result){
//                 $("textSide").append("<div>" + result.name + "</div>");
//             });



//         //     result.reduce((total,item,i)=>{

//     //         console.log(item.insuranceTypeName);
//     //         return total;
//     //     },[])
//         // $( result ).each(function( index ) {
//         //     console.log($(this.insuranceTypeName).text());
//         //   });            




//         }

//     )

// });    burası yapılacak daha yapılmadı.  

// $.getJSON("https://msardic.github.io/bmax/json/offer.json",
//     function (data) {

//        $.each(data, function (indexInArray, valueOfElement) { 
//            console.log(data);
//        }); 
//     }
// );


$(function () {
    $.getJSON("https://msardic.github.io/bmax/json/offer.json",

        function (result) {

            let text = "";

            result.forEach(function (element) {
                let insuranceTypeName = element.insuranceProtectionType;
                let monthlyFee = element.monthlyFee;
                let BodyInjuryMinRepay = element.BodyInjuryMinRepay;
                let BodyInjuryMaxRepay = element.BodyInjuryMaxRepay;
                let propertyDamageRepay = element.PropertyDamageRepay;
                let isCollision = element.isCollision;
                let isCompherensive = element.isCompherensive;
                let isRecommened = element.isRecommened;
                let unitOfCurrency = element.unitOfCurrency;





                const activeRecommened = isRecommened ? "recommend" : "";

                const iconCollision = isCollision ? "icon-tick" : "icon-times";

                const iconCompherensive = isCompherensive ? "icon-tick" : "icon-times";




                let data = ""
                data += '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center ">';
                data += '<div class="card cardStyle w-100">';
                data += '<p class="card-text rcmnd ' + activeRecommened + ' d-flex align-items-center justify-content-center text-white ">RECOMMENED</p>';
                data += '<div class="card-body d-flex flex-column align-items-center py-0">';
                data += '<p class="card-text">' + insuranceTypeName + '</p>';
                data += '<div class="card-title priceSize">' + monthlyFee + '' + unitOfCurrency + '</div>';
                data += '<div class="cardTextContainer mb-2 w-100">';
                data += '<div class="card-text d-flex align-items-center justify-content-between py-2  cardTextStyle">';
                data += '<p>Body Injury</p>';
                data += '<strong>' + BodyInjuryMinRepay + '/' + BodyInjuryMaxRepay + '</strong></div>';
                data += '<div class="card-text d-flex align-items-center justify-content-between py-2 cardTextStyle">';
                data += '<p>' + propertyDamageRepay + '</p>';
                data += '<strong>$15k</strong></div>';
                data += '<div class="card-text d-flex align-items-center justify-content-between py-2 cardTextStyle">';
                data += '<p>Collison</p>';

                data += ' <i class="amax ' + iconCollision + '" ></i>';



                data += '</div><div class="card-text d-flex align-items-center justify-content-between py-2 cardTextStyle">';
                data += '<p>Comprehensive</p>';

                data += ' <i class="amax ' + iconCompherensive + '" ></i>';

                data += '</div></div><a href="#" class="btn btn-success border-0 btnColor1 text-white my-1">START MY QUOTE</a>';
                data += '</div></div></div>';


                text += data;

            });
            document.getElementById("offerContainer1").innerHTML = text;



        });

}

)

$(function () {
    $.getJSON("https://msardic.github.io/bmax/json/secondContent.json",
        function (result) {
            $(".bigHeader").append(result.contentParagraph);
        }
    );
});



$(function () {
    $.getJSON("https://msardic.github.io/bmax/json/faq.json",

        function (result) {

            let text = "";

            result.forEach(function (element) {

                let questionTitle = element.questionTitle;
                let answerOfQuestion = element.answerOfQuestion;
                let svgName = element.svgName;
                

               
                let data="";
                data += '<div class="col-lg-4 col-md-6 col-sm-12 col-xl-4 d-flex flex-column align-items-center px-0 my-5 ">';
                data += '<div class="questionRectangle">';
                data += '<div class="questionHeaderSide d-flex"><div class="svgImage mr-2"><img src="./img/'+svgName+'.svg" /></div><div class="questionHeaderText">'+questionTitle+'</div></div>';
                data += '<div class="questionContentText my-3">'+answerOfQuestion+'</div>';
                data += '<div class="d-flex align-items-baseline"><div class="questionReadMore mr-3">Take the Quiz</div><div class="qRMArrow"><img src="./img/tailright.svg" /></div></div>';
                data += '<div class="redBaseLine"></div>';
                data += '</div>';
                data += '</div>';
                
                text += data;

            });
            document.getElementById("faqContainer").innerHTML = text;



        });
});

$(function () {
    $.getJSON("https://msardic.github.io/bmax/json/important.json",

        function (result) {

            let text = "";

            result.forEach(function (element) {

                let informationTitle = element.informationTitle;
                let informationExplain = element.informationExplain;
                let svgName = element.svgName;
                

               
                let data="";
                data +='<div class="col-xl-3 col-md-4 col-sm-6 d-flex justify-content-center">';
                data +='<div class="bgcontent d-flex flex-column align-items-center justify-content-center mb-3 p-3">';
                data +='<div class="bgcontentImgBackground d-flex justify-content-center align-items-center"><img src="./img/'+svgName+'.svg" alt=""></div>';
                data +='<div class="bgcontentBigText my-4">'+informationTitle+'</div>';
                data +='<div class="bgcontentText">'+informationExplain+'</div>';
                data +='<div class="questionReadMoreContainer d-flex align-items-baseline invisible">';
                data +='<div class="questionReadMore mr-3 invisible">Read More</div>';
                data +='<div class="qRMArrow invisible"><img src="./img/tailright.svg" /></div>';
                data +='</div>';
                data +='</div>';
                data +='</div>';
                data +='</div>';
                
                text += data;

            });
            document.getElementById("importantContainer").innerHTML = text;



        });
});














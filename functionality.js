
        var selectTag = document.getElementById("mySelect");

        function addToList() {

        var valuePairAdd = document.getElementById('addValuePair');
        var regularExpAlpha =  /^[a-z0-9]+$/i;


        valuePairAdd = valuePairAdd.value.trim();
        nameValue = valuePairAdd.split("=");


        var name = nameValue[0];
        var value = nameValue[1];

        name  = name.slice(1,name.length - 1 );
        value =  value.slice( 1,value.length - 1 );

        if( name.match(regularExpAlpha)  && value.match(regularExpAlpha)  ){

          var option = document.createElement("option");
          option.setAttribute("value", value);
          var text = document.createTextNode(name + "=" + value);
          option.appendChild(text);
          selectTag.appendChild(option);

        }

        else{

          alert(" Sorry! Only Alphanumeric");

        }

      }


        
      function sortByName(){

        var selectTag = document.getElementById("mySelect");
        
        var tmpAryName = new Array();
        
        for(i = 0; i< selectTag.length; i++){

          
          nameValue = selectTag.options[i].text.split("=");
          var name = nameValue[0];
          var value = nameValue[1];
        
          tmpAryName.push([name, value]);
        }

        tmpAryName.sort(sortNames);

        for(i = 0; i < selectTag.length; i++){

         selectTag.options[i].text = tmpAryName[i][0] + "=" +tmpAryName[i][1];

         selectTag.options[i].setAttribute("value",tmpAryName[i][1]);

        }

      }


      function sortByValue(){


        var selectTag = document.getElementById("mySelect");

        var status = new Array();

        for( i = 0; i < selectTag.length; i++ ){

          nameValue = selectTag.options[i].text.split("=");
          var name = nameValue[0];
          var value = nameValue[1];

          status.push([name , value]);

        }

        status.sort(sortValues);

        for( i = 0; i < selectTag.length; i++ ){

          selectTag.options[i].text = status[i][0] +"="+ status[i][1];
          selectTag.options[i].setAttribute("value", status[i][1])        
        }
        
      }

      

      function deleteOption(){

        selectTag.remove(selectTag.selectedIndex);

      }


      function sortValues(a, b) {
              
          if (a[1] === b[1]) {
          return 0;
          }
        
        else {
          return (a[1] < b[1]) ? -1 : 1;
        }
      
      }

      function sortNames(a, b) {
              
          if (a[0] === b[0]) {
          return 0;
          }
        
        else {
          return (a[0] < b[0]) ? -1 : 1;
        }
      
      }


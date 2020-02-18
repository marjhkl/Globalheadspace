var map;

  AmCharts.ready(function() {
    var map;

    map = new AmCharts.AmMap();

    map.dragMap = false;
    map.color = "#FFFFFF";

    map.areasSettings = {
      autoZoom: false,
      rollOverOutlineColor: "#FFFFFF",
      selectedColor: "#FFFFFF",
      rollOverColor: "#FFFFFF",
      outlineAlpha: 1,
      outlineColor: "#FFFFFF",
      outlineThickness: 1,
      color: "#000000"
    };

    map.dataProvider = {
      mapVar: AmCharts.maps.continentsLow,

      areas: [{
        "id": "africa",
          "title": "Africa - In sub-Saharan Africa, diseases such as malaria and AIDS have crowded out depression as a top public health risk.",
          "pattern": {
          "url": "patterns/white/pattern1.png",
          width: 4,
          height: 4
        }
      }, {
        "id": "asia",
          "title": "Asia - Mental health problems are on the rise in the Asia Pacific region and it is often been neglected or gone unnoticed. The prevalence and incidence of certain mental health disorders and illnesses are increasing, particularly in developing and developing countries such as Japan, Korea, Thailand, Malaysia, Singapore and etc.",
          "pattern": {
          "url": "patterns/white/pattern2.png",
          width: 4,
          height: 4
        }
      }, {
        "id": "australia",
          "title": "Australia - One in five (20%) Australians aged 16-85 experience a mentalillness in any year. The most common mentalillnesses are depressive, anxiety and substance use disorder. ",
          "pattern": {
          "url": "patterns/white/pattern3.png",
          width: 4,
          height: 4
        }
      }, {
        "id": "europe",
          "title": "Europe - 27% of the adult population (here defined as aged 18–65) had experienced at least one of a series of mental disorders in the past year (this included problems arising from substance use, psychoses, depression, anxiety, and eating disorders). (2017)",
          "pattern": {
          "url": "patterns/white/pattern4.png",
          width: 4,
          height: 4
        }
      }, {
        "id": "north_america",
          "title": "North America - Major depression is one of the most common mental illnesses, affecting 6.7% (more than 16 million) of American adults each year. (2014)",
          "pattern": {
          "url": "patterns/white/pattern5.png",
          width: 4,
          height: 4
        }
      }, {
        "id": "south_america",
          "title": "South America - Latin America, 5% of the adult population suffers from it, but most neither seek – nor receive – treatment. (2012)",
          "pattern": {
          "url": "patterns/white/pattern6.png",
          width: 4,
          height: 4
        }
      }]
    };
    var zoomControl = map.zoomControl;
    zoomControl.panControlEnabled = false;
    zoomControl.zoomControlEnabled = false;

    map.write("mapdiv");

  });

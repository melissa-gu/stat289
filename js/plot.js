(function() {
  var fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
          
        var docs_json = '{"4b42afb5-0856-41d8-9bcb-02d11594c3b2":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"984b0c76-0661-463f-b7e6-e78ae0fbcd92","subtype":"Figure","type":"Plot"},"ticker":{"id":"aa3efe25-62c6-45df-9674-450cb909ac04","type":"BasicTicker"}},"id":"66d9abeb-4b8d-4b00-81d1-264f948124e1","type":"Grid"},{"attributes":{"source":{"id":"25b7a072-7bc4-44b7-b908-33fde214af7d","type":"ColumnDataSource"}},"id":"37fec159-11cd-4116-bc21-914d9d8b908f","type":"CDSView"},{"attributes":{},"id":"aa3efe25-62c6-45df-9674-450cb909ac04","type":"BasicTicker"},{"attributes":{"url":"@dlink"},"id":"afd4e756-a745-4fc4-b9c4-5bebb812bb69","type":"OpenURL"},{"attributes":{"axis_label":"Number of language pages","formatter":{"id":"25bd2ec4-9497-454a-8bbf-6c2ee9fa471e","type":"BasicTickFormatter"},"plot":{"id":"984b0c76-0661-463f-b7e6-e78ae0fbcd92","subtype":"Figure","type":"Plot"},"ticker":{"id":"aa3efe25-62c6-45df-9674-450cb909ac04","type":"BasicTicker"}},"id":"ad581465-e221-4db2-84d8-234273a39f58","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"num_ilinks"},"y":{"field":"num_langs"}},"id":"f081b388-9179-44f1-994c-d91399570e40","type":"Circle"},{"attributes":{"plot":{"id":"984b0c76-0661-463f-b7e6-e78ae0fbcd92","subtype":"Figure","type":"Plot"},"ticker":{"id":"299d5687-007d-471c-ad11-2c4e38892dcc","type":"BasicTicker"}},"id":"27e8d150-7af4-4bfb-832a-0b3178639db7","type":"Grid"},{"attributes":{},"id":"a737b8ad-af24-42e3-8bb5-0a78e723a079","type":"Selection"},{"attributes":{"data_source":{"id":"25b7a072-7bc4-44b7-b908-33fde214af7d","type":"ColumnDataSource"},"glyph":{"id":"19e6c7d7-80e6-4107-a573-9604ece6b37b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f081b388-9179-44f1-994c-d91399570e40","type":"Circle"},"selection_glyph":null,"view":{"id":"37fec159-11cd-4116-bc21-914d9d8b908f","type":"CDSView"}},"id":"04c0f1e1-beb4-4f48-8e17-8ae723ad678f","type":"GlyphRenderer"},{"attributes":{},"id":"28700c9f-baf4-430a-a82a-02c4d16c4d94","type":"UnionRenderers"},{"attributes":{},"id":"299d5687-007d-471c-ad11-2c4e38892dcc","type":"BasicTicker"},{"attributes":{"axis_label":"Number of internal links","formatter":{"id":"72d4d3e8-9204-4294-891e-fb47d3821f95","type":"BasicTickFormatter"},"plot":{"id":"984b0c76-0661-463f-b7e6-e78ae0fbcd92","subtype":"Figure","type":"Plot"},"ticker":{"id":"299d5687-007d-471c-ad11-2c4e38892dcc","type":"BasicTicker"}},"id":"7479b12d-b61a-451c-8c13-5ea3edb88138","type":"LinearAxis"},{"attributes":{},"id":"72d4d3e8-9204-4294-891e-fb47d3821f95","type":"BasicTickFormatter"},{"attributes":{"callback":{"id":"afd4e756-a745-4fc4-b9c4-5bebb812bb69","type":"OpenURL"}},"id":"178470d3-ca14-4fe5-9d1e-1bd368a2fd45","type":"TapTool"},{"attributes":{},"id":"25bd2ec4-9497-454a-8bbf-6c2ee9fa471e","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"6e20a3f2-12ab-4524-9898-cc2c99df8eec","type":"DataRange1d"},{"attributes":{},"id":"9bc16f12-cfef-4dd9-ac77-0fd8577e7122","type":"ResetTool"},{"attributes":{},"id":"12bb43cb-d345-4ea5-8b42-951ff976a744","type":"WheelZoomTool"},{"attributes":{},"id":"8734baca-dbe7-4d91-9259-8f33b98a968a","type":"LinearScale"},{"attributes":{},"id":"915e5d47-fc9c-447f-929b-f8f13b9bbcf1","type":"PanTool"},{"attributes":{"callback":null},"id":"6da783c9-3238-4ce7-920a-b5aee8ce5146","type":"DataRange1d"},{"attributes":{"below":[{"id":"7479b12d-b61a-451c-8c13-5ea3edb88138","type":"LinearAxis"}],"left":[{"id":"ad581465-e221-4db2-84d8-234273a39f58","type":"LinearAxis"}],"plot_width":950,"renderers":[{"id":"7479b12d-b61a-451c-8c13-5ea3edb88138","type":"LinearAxis"},{"id":"27e8d150-7af4-4bfb-832a-0b3178639db7","type":"Grid"},{"id":"ad581465-e221-4db2-84d8-234273a39f58","type":"LinearAxis"},{"id":"66d9abeb-4b8d-4b00-81d1-264f948124e1","type":"Grid"},{"id":"04c0f1e1-beb4-4f48-8e17-8ae723ad678f","type":"GlyphRenderer"}],"title":{"id":"8e2f7615-5a32-4878-ac0c-16f4f4aa731d","type":"Title"},"toolbar":{"id":"4f444790-cbbb-4af6-bbcc-0e566005b3af","type":"Toolbar"},"toolbar_location":"below","x_range":{"id":"6da783c9-3238-4ce7-920a-b5aee8ce5146","type":"DataRange1d"},"x_scale":{"id":"090ba8e8-d648-48ab-8eab-16f87edb6e31","type":"LinearScale"},"y_range":{"id":"6e20a3f2-12ab-4524-9898-cc2c99df8eec","type":"DataRange1d"},"y_scale":{"id":"8734baca-dbe7-4d91-9259-8f33b98a968a","type":"LinearScale"}},"id":"984b0c76-0661-463f-b7e6-e78ae0fbcd92","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"090ba8e8-d648-48ab-8eab-16f87edb6e31","type":"LinearScale"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["title","@title"],["Length","@Length"]]},"id":"9eae68ce-9b7c-46e9-ae1e-acb675786754","type":"HoverTool"},{"attributes":{"plot":null,"text":""},"id":"8e2f7615-5a32-4878-ac0c-16f4f4aa731d","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"field":"COLOR"},"line_color":{"field":"COLOR"},"size":{"units":"screen","value":10},"x":{"field":"num_ilinks"},"y":{"field":"num_langs"}},"id":"19e6c7d7-80e6-4107-a573-9604ece6b37b","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":{"id":"12bb43cb-d345-4ea5-8b42-951ff976a744","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"9eae68ce-9b7c-46e9-ae1e-acb675786754","type":"HoverTool"},{"id":"915e5d47-fc9c-447f-929b-f8f13b9bbcf1","type":"PanTool"},{"id":"12bb43cb-d345-4ea5-8b42-951ff976a744","type":"WheelZoomTool"},{"id":"9bc16f12-cfef-4dd9-ac77-0fd8577e7122","type":"ResetTool"},{"id":"178470d3-ca14-4fe5-9d1e-1bd368a2fd45","type":"TapTool"}]},"id":"4f444790-cbbb-4af6-bbcc-0e566005b3af","type":"Toolbar"},{"attributes":{"callback":null,"data":{"COLOR":["#287A8E","#25838D","#1E9B89","#3DBB74","#8BD546","#46307D","#FDE724","#FDE724","#30B47A","#48196B","#9FD938","#228B8D","#3C4E8A","#48196B","#1F938B","#74D054","#3C4E8A","#48196B","#B7DD29","#20A485","#3DBB74","#60C960","#9FD938","#1F938B","#CFE11C","#46307D","#33618D","#20A485","#37588C","#37588C","#46307D","#37588C","#472575","#433A83","#433A83","#3C4E8A","#228B8D","#26AC81","#30B47A","#228B8D","#1E9B89","#2C728E","#74D054","#287A8E","#CFE11C","#E7E419","#26AC81","#440154","#287A8E","#9FD938","#460C5F","#60C960","#433A83","#46307D","#404487","#25838D","#287A8E","#33618D","#60C960","#4DC26B","#48196B","#404487","#460C5F","#B7DD29","#3DBB74","#E7E419","#2F698D","#2C728E","#2C728E","#20A485","#460C5F","#9FD938","#3DBB74","#37588C","#2C728E","#30B47A","#440154","#287A8E","#1F938B","#26AC81","#25838D","#20A485","#E7E419","#E7E419","#3C4E8A","#2C728E","#E7E419","#4DC26B","#2F698D","#46307D","#26AC81","#B7DD29","#2F698D","#B7DD29","#1E9B89","#2F698D","#472575","#26AC81","#74D054","#8BD546","#CFE11C","#3DBB74","#FDE724","#3C4E8A","#46307D","#30B47A","#404487","#440154","#8BD546","#33618D","#1F938B","#440154","#33618D","#9FD938","#1F938B","#460C5F","#472575","#CFE11C","#404487","#472575","#20A485","#4DC26B","#60C960","#228B8D","#E7E419","#472575","#FDE724","#460C5F","#74D054","#33618D","#228B8D","#404487","#440154","#25838D","#60C960","#4DC26B","#8BD546","#1E9B89","#74D054","#B7DD29"],"Length":[1569,1780,2755,4087,5959,812,63793,16872,3531,643,6795,2177,1112,614,2667,5382,1122,598,7601,2989,4016,4885,6481,2729,9064,873,1218,2911,1211,1200,893,1177,682,923,951,1137,2073,3375,3381,2004,2841,1512,5427,1591,10161,11975,3155,379,1521,6692,545,5372,953,888,1016,1812,1674,1266,5223,4732,595,971,431,7546,4155,15136,1352,1467,1500,3110,467,7267,3854,1216,1506,3560,212,1628,2729,3257,1797,2997,12989,11502,1149,1505,12989,4276,1319,893,3310,8858,1446,7930,2837,1339,695,3153,5462,5959,9264,4038,27032,1022,734,3625,1019,336,5921,1243,2383,307,1219,6895,2319,588,692,10552,1006,704,3053,4579,5223,2157,15136,711,44338,570,5531,1295,2216,1018,350,1829,5010,4276,5959,2733,5897,8160],"dlink":["docs.html#sec-1","docs.html#sec0","docs.html#sec1","docs.html#sec2","docs.html#sec3","docs.html#sec4","docs.html#sec5","docs.html#sec6","docs.html#sec7","docs.html#sec8","docs.html#sec9","docs.html#sec10","docs.html#sec11","docs.html#sec12","docs.html#sec13","docs.html#sec14","docs.html#sec15","docs.html#sec16","docs.html#sec17","docs.html#sec18","docs.html#sec19","docs.html#sec20","docs.html#sec21","docs.html#sec22","docs.html#sec23","docs.html#sec24","docs.html#sec25","docs.html#sec26","docs.html#sec27","docs.html#sec28","docs.html#sec29","docs.html#sec30","docs.html#sec31","docs.html#sec32","docs.html#sec33","docs.html#sec34","docs.html#sec35","docs.html#sec36","docs.html#sec37","docs.html#sec38","docs.html#sec39","docs.html#sec40","docs.html#sec41","docs.html#sec42","docs.html#sec43","docs.html#sec44","docs.html#sec45","docs.html#sec46","docs.html#sec47","docs.html#sec48","docs.html#sec49","docs.html#sec50","docs.html#sec51","docs.html#sec52","docs.html#sec53","docs.html#sec54","docs.html#sec55","docs.html#sec56","docs.html#sec57","docs.html#sec58","docs.html#sec59","docs.html#sec60","docs.html#sec61","docs.html#sec62","docs.html#sec63","docs.html#sec64","docs.html#sec65","docs.html#sec66","docs.html#sec67","docs.html#sec68","docs.html#sec69","docs.html#sec70","docs.html#sec71","docs.html#sec72","docs.html#sec73","docs.html#sec74","docs.html#sec75","docs.html#sec76","docs.html#sec77","docs.html#sec78","docs.html#sec79","docs.html#sec80","docs.html#sec81","docs.html#sec82","docs.html#sec83","docs.html#sec84","docs.html#sec85","docs.html#sec86","docs.html#sec87","docs.html#sec88","docs.html#sec89","docs.html#sec90","docs.html#sec91","docs.html#sec92","docs.html#sec93","docs.html#sec94","docs.html#sec95","docs.html#sec96","docs.html#sec97","docs.html#sec98","docs.html#sec99","docs.html#sec100","docs.html#sec101","docs.html#sec102","docs.html#sec103","docs.html#sec104","docs.html#sec105","docs.html#sec106","docs.html#sec107","docs.html#sec108","docs.html#sec109","docs.html#sec110","docs.html#sec111","docs.html#sec112","docs.html#sec113","docs.html#sec114","docs.html#sec115","docs.html#sec116","docs.html#sec117","docs.html#sec118","docs.html#sec119","docs.html#sec120","docs.html#sec121","docs.html#sec122","docs.html#sec123","docs.html#sec124","docs.html#sec125","docs.html#sec126","docs.html#sec127","docs.html#sec128","docs.html#sec129","docs.html#sec130","docs.html#sec131","docs.html#sec132","docs.html#sec133","docs.html#sec134","docs.html#sec135","docs.html#sec136","docs.html#sec137","docs.html#sec138"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139],"num_ilinks":[80,18,66,75,118,23,527,128,138,388,109,109,324,7,416,97,13,16,131,93,100,96,205,106,171,81,14,23,77,28,86,20,74,112,102,72,171,19,14,70,111,109,89,86,91,289,50,575,326,74,10,60,94,18,69,98,79,103,114,67,14,80,90,75,113,346,112,90,90,124,12,101,86,23,77,146,10,81,106,52,30,66,265,416,23,79,265,37,74,100,21,124,88,103,71,80,70,56,141,118,187,137,198,82,82,90,26,70,141,77,25,18,15,81,47,20,72,134,12,86,37,45,114,271,346,97,263,16,98,25,60,322,78,31,106,37,118,46,86,157],"num_langs":[1,0,0,2,1,0,55,25,1,1,6,0,4,0,15,2,0,0,2,0,2,1,33,1,6,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,7,9,0,0,4,19,0,0,0,19,0,0,2,0,0,0,0,0,3,1,0,0,0,0,0,30,0,0,1,0,0,3,0,0,0,0,0,0,1,0,0,41,17,19,0,0,17,4,0,0,1,0,0,13,1,0,0,9,18,1,15,0,0,1,0,0,1,0,4,0,2,0,0,1,3,0,0,1,0,0,2,3,3,0,30,0,63,0,1,0,0,0,0,0,0,4,1,1,1,1],"title":["All-Bran","Alpen (food)","Alpha-Bits","Apple Jacks","Weetabix Limited","Bokomo","Brand","Breakfast cereal","Cap&#x27;n Crunch","Cereal Partners Worldwide","Cheerios","Chex","Chocapic","Chocos","Cinnabon","Cinnamon Toast Crunch","Clackers cereal","CoCo Wheats","Cocoa Krispies","Cocoa Puffs","Cookie Crisp","Corn Pops","Corn flakes","Monster cereals","Cracker Jack","Cracklin&#x27; Oat Bran","Crazy Cow","Cream of Wheat","Crispix","Crispy Critters","Cruncheroos","Crunchfuls","Crunchy Nut","Disney Hunny B&#x27;s Honey-Graham","Disney Mickey&#x27;s Magix","Eggo Cereal","Flutie Flakes","Force (cereal)","Freakies","French Toast Crunch","Froot Loops","Frosted Flakes","Frosted Mini-Wheats","Fruit &#x27;n Fibre","General Foods","General Mills","Golden Crisp","List of breakfast cereals","Golden Nuggets","Granola","Granula","Grape-Nuts","Hershey&#x27;s Cookies &#x27;n&#x27; Creme","Hidden Treasures (cereal)","Honey Bunches of Oats","Honey Nut Cheerios","Honey Nut Clusters","Honey Puffs","Honey Smacks","Honeycomb (cereal)","Ice Cream Cones (cereal)","Just Right","Kaboom (breakfast cereal)","Kashi (company)","Keebler Company","Kellogg&#x27;s","King Vitaman","Kix (cereal)","Krave (cereal)","Life (cereal)","Little Crow Foods","Lucky Charms","MOM Brands","Marshmallow Mateys","Maypo","McKee Foods","Mini Cinnamon Churros","Mini Swirlz","Monster cereals","Morning Funnies","Mr. T Cereal","Muesli","Nabisco","Nesquik","Nintendo Cereal System","Nutri-Grain","Nabisco","Weetabix","Oatmeal Crisp","Oh&#x27;s","Oreo O&#x27;s","Pebbles cereal","Pep (cereal)","Pop-Tarts","Post Consumer Brands","Product 19","Puffa Puffa Rice","Puffed grain","Puffed rice","Weetabix Limited","Quaker Oats Company","Quisp","Rainbow Brite","Raisin Bran","Raisin Wheats","Ralcorp","Ready Brek","Reese&#x27;s Puffs","Rice Krispies","Ricicles","Rocky Mountain Chocolate Factory","Rocky Road Cereal","S&#x27;mores Grahams","Shredded wheat","Shreddies","Sir Grapefellow","Smorz","Special K","Sprinkle Spangles","Start (cereal)","Store brand","Honey Monster Puffs","Honey Smacks","Teddy Grahams","Kellogg&#x27;s","Total (cereal)","Trademark","Triples (cereal)","Trix (cereal)","U.S. Mills","Uncle Sam Cereal","Uncle Tobys","Under Cover Bears Instant Oatmeal","Waffle Crisp","Weet-Bix","Weetabix","Weetabix Limited","Weetos","Wheatena","Wheaties"]},"selected":{"id":"a737b8ad-af24-42e3-8bb5-0a78e723a079","type":"Selection"},"selection_policy":{"id":"28700c9f-baf4-430a-a82a-02c4d16c4d94","type":"UnionRenderers"}},"id":"25b7a072-7bc4-44b7-b908-33fde214af7d","type":"ColumnDataSource"}],"root_ids":["984b0c76-0661-463f-b7e6-e78ae0fbcd92"]},"title":"Bokeh Application","version":"0.13.0"}}';
        var render_items = [{"docid":"4b42afb5-0856-41d8-9bcb-02d11594c3b2","roots":{"984b0c76-0661-463f-b7e6-e78ae0fbcd92":"a6914c71-14e3-42fe-84dc-a8dd7ec42741"}}];
        root.Bokeh.embed.embed_items(docs_json, render_items);
      
        }
        if (root.Bokeh !== undefined) {
          embed_document(root);
        } else {
          var attempts = 0;
          var timer = setInterval(function(root) {
            if (root.Bokeh !== undefined) {
              embed_document(root);
              clearInterval(timer);
            }
            attempts++;
            if (attempts > 100) {
              console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
              clearInterval(timer);
            }
          }, 10, root)
        }
      })(window);
    });
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
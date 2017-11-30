var originalHtml = document.body.innerHTML;
var histclick = 0;
var vioclick = 0;
var noteclick = 0;

//sound mp3 variables G string/
var soundGG = new Audio('violin sample notes/GG.mp3'),
    soundGGsAb = new Audio('violin sample notes/GGs.mp3'),
    soundGA = new Audio('violin sample notes/GA.mp3'),
    soundGAsBb = new Audio('violin sample notes/GAs.mp3'),
    soundGB = new Audio('violin sample notes/GB.mp3'),
    soundGC = new Audio('violin sample notes/GC.mp3'),
    soundGCsDb = new Audio('violin sample notes/GCs.mp3'),
    soundGD = new Audio('violin sample notes/GD.mp3');

//sound mp3 variables D String/
var soundDD = new Audio('violin sample notes/DD.mp3'),
    soundDDsEb = new Audio('violin sample notes/DDs.mp3'),
    soundDE = new Audio('violin sample notes/DE.mp3'),
    soundDF = new Audio('violin sample notes/DF.mp3'),
    soundDFsGb = new Audio('violin sample notes/DFs.mp3'),
    soundDG = new Audio('violin sample notes/DG.mp3'),
    soundDGsAb = new Audio('violin sample notes/DGs.mp3'),
    soundDA = new Audio('violin sample notes/DA.mp3');

//sound mp3 variables A String/
var soundAA = new Audio('violin sample notes/AA.mp3'),
    soundAAsBb = new Audio('violin sample notes/AAs.mp3'),
    soundAB = new Audio('violin sample notes/AB.mp3'),
    soundAC = new Audio('violin sample notes/AC.mp3'),
    soundACsDb = new Audio('violin sample notes/ACs.mp3'),
    soundAD = new Audio('violin sample notes/AD.mp3'),
    soundADsEb = new Audio('violin sample notes/ADs.mp3'),
    soundAE = new Audio('violin sample notes/AE.mp3');

//sound mp3 variables E String/
var soundEE = new Audio('violin sample notes/EE.mp3'),
    soundEF = new Audio('violin sample notes/EF.mp3'),
    soundEFsGb = new Audio('violin sample notes/EFs.mp3'),
    soundEG = new Audio('violin sample notes/EG.mp3'),
    soundEGsAb = new Audio('violin sample notes/EGs.mp3'),
    soundEA = new Audio('violin sample notes/EA.mp3'),
    soundEAsBb = new Audio('violin sample notes/EAs.mp3'),
    soundEB = new Audio('violin sample notes/EB.mp3');



//doc variables//
var backImg = document.getElementById('backImage');


/*----------------reset func---------------*/
function reloadPage(){
   window.location.reload();
}

/*----------------home button--------------*/
document.getElementById('home').addEventListener('click', function(){
    if (histclick > 0){
        document.getElementById('narrator').style.display = 'none';
    }if (vioclick > 0){
        document.getElementById('vioBox').style.display = 'none';
    };
});

/*----------------history--------------*/

document.getElementById('history').addEventListener('click', function(){
    if (histclick == 0) {
        //variables and div classes designation//
        var iDiv = document.createElement('div');
        iDiv.id = 'narrator';

        var imgDiv = document.createElement('img');
        imgDiv.id = 'historypic';
        imgDiv.src = 'images/narrator.png';
        
        var img2Div = document.createElement('img');
        img2Div.id = 'historyMusicNote';
        img2Div.src = 'images/musicnotes.png';
        
        var txtDiv = document.createElement('h2');
        txtDiv.id = 'centertxt';

        var para1 = document.createElement('p');
        para1.id = 'p1';
        para1.class = 'histtxt';

        var para2 = document.createElement('p');
        para2.id = 'p2';
        para2.class = 'histtxt';

        var para3 = document.createElement('p');
        para3.id = 'p3';
        para3.class = 'histtxt';

        //creating the divs//
        backImg.appendChild(iDiv);

        var narrator = document.getElementById('narrator');
        narrator.appendChild(imgDiv);
        narrator.appendChild(img2Div);
        narrator.appendChild(para1);
        narrator.appendChild(para2);
        narrator.appendChild(para3);

        var txtp1 = document.getElementById('p1');
        var txtp2 = document.getElementById('p2');
        var txtp3 = document.getElementById('p3');
;
        txtp1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh purus, pharetra nec tincidunt eu, blandit volutpat sapien. Phasellus sodales neque sit amet dolor auctor suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam vitae nisl vel leo tincidunt sagittis imperdiet at lorem. Etiam efficitur tempor mattis. Sed nibh felis, consectetur at sapien ac, vehicula accumsan tortor. Integer urna felis, efficitur vel risus vitae, ornare vulputate mauris. Curabitur hendrerit eros vehicula auctor sagittis. Sed enim tortor, rhoncus eget pellentesque in, dapibus vel nulla.';

        txtp2.innerHTML = 'Nulla varius gravida commodo. In enim neque, aliquet ac pellentesque at, rutrum et lacus. Aliquam neque tortor, convallis eu ultrices in, lacinia vel odio. Sed neque nulla, hendrerit at turpis ac, pellentesque tempus felis. Suspendisse consequat rhoncus velit, et congue mauris dictum sed. Mauris fringilla convallis enim ac volutpat. Suspendisse vulputate magna in interdum ultricies. Morbi vitae nibh et eros sodales euismod sed a justo. Nullam volutpat, lacus eu rutrum ultricies, nunc ligula porta dui, in bibendum nisi eros et erat. Sed id mi porttitor, elementum mi ac, luctus velit. Proin et nisl finibus, blandit nunc a, consectetur velit. Nam sit amet tellus sem. Vestibulum commodo a massa sed malesuada. Ut a vestibulum lectus. Curabitur ac euismod felis, id varius nisi. Donec lorem sem, consequat non ligula at, tristique luctus tellus.';

        txtp3.innerHTML = 'In finibus et arcu eget aliquam. Maecenas quis lacinia tellus. Maecenas venenatis mollis justo, ut blandit tellus dapibus eu. Morbi interdum urna justo, ac finibus ex dapibus eu. Suspendisse volutpat massa justo, ullamcorper auctor velit tincidunt id. Ut non elit malesuada, malesuada est vel, posuere nibh. Mauris venenatis iaculis ornare. Etiam ultrices, massa ut consequat vulputate, nunc dui vehicula mauris, facilisis volutpat eros nulla id magna. Sed dictum dictum orci, sit amet blandit libero malesuada ac. Nunc euismod justo id venenatis tristique.';

        //styling the divs//
        narrator.style.left = '0px';
        narrator.style.bottom = '0px';
        narrator.style.top = '0px';
        narrator.style.right = '0px';
        narrator.style.margin = 'auto';
        narrator.style.position = 'fixed';
        narrator.style.height = '65vh';
        narrator.style.width = '75vw';

        var histPic = document.getElementById('historypic');

        histPic.style.height = '35%';
        histPic.style.position = 'absolute';
        histPic.style.bottom = '0px';
        histPic.style.left = '0px';
        
        var histnote = document.getElementById('historyMusicNote');
        histnote.style.height = '20%';
        histnote.style.position = 'absolute';
        histnote.style.bottom = '0px';
        histnote.style.left = '0px';
        histnote.style.right = '0px';
        histnote.style.margin = 'auto';
        
        txtp1.style.color = 'white';
        txtp2.style.color = 'white';
        txtp3.style.color = 'white';

        txtp1.style.fontSize = '1vw';
        txtp2.style.fontSize = '1vw';
        txtp3.style.fontSize = '1vw';
        
        histclick = histclick + 1;
    }
    if (vioclick > 0){
        document.getElementById('vioBox').style.display = 'none';
    };
    document.getElementById('narrator').style.display = 'inline';
})


/*----------------violin--------------*/
document.getElementById('violin').addEventListener('click', function(){
    if (histclick > 0){
        document.getElementById('narrator').style.display = 'none';
    };
    if (vioclick == 0){
        //variables for id and classes//
        
        //divs//
        var vioDiv = document.createElement('div');
        vioDiv.id = 'vioBox';
        
        var subVioDiv = document.createElement('div');
        subVioDiv.id = 'vioParts';
        
        var subBowDiv = document.createElement('div');
        subBowDiv.id = 'bowParts';
        
        //headings//
        var headParts = document.createElement('h1');
        headParts.id = 'headParts';
        
        //imgs//
        var imgVioPart = document.createElement('img');
        imgVioPart.id = 'vioPartImg';
        
        var imgBowPart = document.createElement('img');
        imgBowPart.id = 'bowPartImg';
        
        //buttons//
        var vioButton = document.createElement('button');
        vioButton.id = 'toVioButton';
        
        var bowButton = document.createElement('button');
        bowButton.id = 'toBowButton';
        
        //paragraphs//
        
        //para of bow//
        var para1b = document.createElement('p');
        para1b.id = 'bp1';
        para1b.class = 'bowtxt';

        var para2b = document.createElement('p');
        para2b.id = 'bp2';
        para2b.class = 'bowtxt';

        var para3b = document.createElement('p');
        para3b.id = 'bp3';
        para3b.class = 'bowtxt';
        
        var para4b = document.createElement('p');
        para4b.id = 'bp4';
        para4b.class = 'bowtxt';
        
        var para5b = document.createElement('p');
        para5b.id = 'bp5';
        para5b.class = 'bowtxt';
        
        //para of violin//
        var para1v = document.createElement('p');
        para1v.id = 'vp1';
        para1v.class = 'viotxt';

        var para2v = document.createElement('p');
        para2v.id = 'vp2';
        para2v.class = 'viotxt';

        var para3v = document.createElement('p');
        para3v.id = 'vp3';
        para3v.class = 'viotxt';
        
        var para4v = document.createElement('p');
        para4v.id = 'vp4';
        para4v.class = 'viotxt';
        
        var para5v = document.createElement('p');
        para5v.id = 'vp5';
        para5v.class = 'viotxt';
        
        //creating divs//
        backImg.appendChild(vioDiv);
        
        var vioBox = document.getElementById('vioBox');
        vioBox.appendChild(subVioDiv);
        vioBox.appendChild(subBowDiv);
        
        vioBox.appendChild(vioButton);
        vioBox.appendChild(bowButton);
        
        vioBox.appendChild(headParts);
        var toVioButton = document.getElementById('toVioButton');
        var toBowButton = document.getElementById('toBowButton');
        var getPartsHeading = document.getElementById('headParts');
        
        toVioButton.innerHTML = 'To Parts of the Violin';
        toBowButton.innerHTML = 'To Parts of the Bow';
        getPartsHeading.innerHTML = 'Please choose a part of the violin you want to learn:';
        getPartsHeading.style.fontSize = '2vw';
        
        
        subVioDiv.appendChild(imgVioPart);
        subVioDiv.appendChild(para1b);
        subVioDiv.appendChild(para2b);
        subVioDiv.appendChild(para3b);
        subVioDiv.appendChild(para4b);
        subVioDiv.appendChild(para5b);
        
        subBowDiv.appendChild(imgBowPart);
        subBowDiv.appendChild(para1v);
        subBowDiv.appendChild(para2v);
        subBowDiv.appendChild(para3v);
        subBowDiv.appendChild(para4v);
        subBowDiv.appendChild(para5v);
        
        var vioPartImg = document.getElementById('vioPartImg');
        var bowPartImg = document.getElementById('bowPartImg');
        
        vioPartImg.src = ('images/viopart.png');
        bowPartImg.src = ('images/bowpart.png');
        
        
        //styling the divs//
        vioBox.style.left = '0px';
        vioBox.style.bottom = '0px';
        vioBox.style.top = '0px';
        vioBox.style.right = '0px';
        vioBox.style.margin = 'auto';
        vioBox.style.position = 'absolute';
        vioBox.style.height = '65vh';
        vioBox.style.width = '75vw';
        
        getPartsHeading.style.textAlign = 'center';
        getPartsHeading.style.color = 'rgba(50,50,155,1)';
        
        var vioParts = document.getElementById('vioParts');
        vioParts.style.top = '0px';
        vioParts.style.bottom = '0px';
        vioParts.style.left = '15px';
        vioParts.style.margin = 'auto';
        vioParts.style.position = 'absolute';
        vioParts.style.height = '80%';
        vioParts.style.width = '45%';
        
        var bowParts = document.getElementById('bowParts');
        bowParts.style.top = '0px';
        bowParts.style.bottom = '0px';
        bowParts.style.right = '15px';
        bowParts.style.margin = 'auto';
        bowParts.style.position = 'absolute';
        bowParts.style.height = '80%';
        bowParts.style.width = '45%';
        
        vioPartImg.style.height = '100%';
        vioPartImg.style.top = '0px';
        vioPartImg.style.bottom = '0px';
        vioPartImg.style.left = '0px';
        vioPartImg.style.right = '0px';
        vioPartImg.style.margin = 'auto';
        vioPartImg.style.position = 'absolute';
        
        bowPartImg.style.height = '100%';
        bowPartImg.style.top = '0px';
        bowPartImg.style.bottom = '0px';
        bowPartImg.style.left = '0px';
        bowPartImg.style.right = '0px';
        bowPartImg.style.margin = 'auto';
        bowPartImg.style.position = 'absolute';
        
        toVioButton.style.position = 'absolute';
        toVioButton.style.bottom = '0';
        toVioButton.style.left = '0';
        toVioButton.style.width = '10%';
        toVioButton.style.height = '5%';
        toVioButton.style.fontSize = '0.7vw';
        toVioButton.style.display = 'none';
         
        toBowButton.style.position = 'absolute';
        toBowButton.style.bottom = '0';
        toBowButton.style.right = '0';
        toBowButton.style.width = '10%';
        toBowButton.style.height = '5%';
        toBowButton.style.fontSize = '0.7vw';
        toBowButton.style.display = 'none';
        
        vioclick = vioclick + 1;
    
    };
        var lDisp = 0
    
    document.getElementById('vioParts').addEventListener('click', function(){

            if (lDisp == 0){
                lDisp = lDisp + 1

                vioPartImg.src = ('images/viopartdisp.png');
                bowPartImg.src = ('');
                
                toBowButton.style.display = 'inline';
                toVioButton.style.display = 'none';
                
                var vpara1 = document.getElementById('vp1')
                var vpara2 = document.getElementById('vp2')
                var vpara3 = document.getElementById('vp3')
                var vpara4 = document.getElementById('vp4')
                var vpara5 = document.getElementById('vp5')

                vpara1.innerHTML = 'Tuning Pegs/Pegbox - The tuning pegs and pegbox are located at the top of the instrument by the scroll. This is where the strings are attached at the top. The end of the string is inserted into a hole in the peg, which is then wound in order to tighten the string. The majority of tuning is performed by tightening the peg, with fine tuners being used for strings out by less than half a tone.'
                vpara1.style.color = 'rgba(50,50,155,1)';
                
                vpara2.innerHTML = 'Strings - The strings on the violin are tuned G,D,A,E from lowest to highest. Strings differ significantly in quality, and the quality of the strings makes a considerable difference to the tonal quality produced by the instrument. Strings are made from a variety of different metals (mainly aluminium, steel and gold for the E-string).'
                vpara2.style.color = 'rgba(50,50,155,1)';
                
                vpara3.innerHTML = 'Fingerboard - The fingerboard is the smooth black playing surface glued to the neck of the violin underneath the strings. Violinists sometimes get black residue on their fingers on the left-hand due to the black polish rubbing off. Eventually the fingerboard would need refinishing if this starts to happen.'
                vpara3.style.color = 'rgba(50,50,155,1)';
                
                vpara4.innerHTML = 'Fine Tuners - Fine tuners can be found either on all four strings, or just the E string. If you are a beginner, it is best to choose a violin with four fine tuners as it makes it significantly less likely that you will break a string while tuning. Fine tuners are essentially a screw that presses down a lever that then tightens the string fractionally. When a fine tuner reaches the end of the screw, it should be unscrewed completely and then the peg should be tightened before again using the fine tuner.'
                vpara4.style.color = 'rgba(50,50,155,1)';
                
                vpara5.innerHTML = 'Bridge - The bridge of the violin comes in varying angles of curvature. A smaller angle makes it easier to play double or triple stops (playing two or three strings at the same time.) Whereas more curved bridges make it easier to hit the right notes without scraping across a wrong string. Classical violinists tend to have more curved bridges. Fiddle or country players have flatter bridges.'
                vpara5.style.color = 'rgba(50,50,155,1)';
                
                getPartsHeading.innerHTML = 'Parts of the Violin'
                getPartsHeading.style.fontSize = '2vw';
            };
        });
            
    document.getElementById('bowParts').addEventListener('click', function(){

            if (lDisp == 0){
                lDisp = lDisp + 1

                bowPartImg.src = ('images/bowpartdisp.png');
                vioPartImg.src = ('');
                
                toBowButton.style.display = 'none';
                toVioButton.style.display = 'inline';
                
                var bpara1 = document.getElementById('bp1');
                var bpara2 = document.getElementById('bp2');
                var bpara3 = document.getElementById('bp3');
                var bpara4 = document.getElementById('bp4');
                var bpara5 = document.getElementById('bp5');

                bpara1.innerHTML = 'Hair - The hair of the bow is the part that touches the string when playing. Usually the hair is made out of either a synthetic material or horse hair, and these strands need to be well-rosined to produce sound. If your bow is not well rosined, you may find that it slips on the string and produces a softer, whisper-like tone.'
                bpara1.style.color = 'rgba(50,50,155,1)';
                
                bpara2.innerHTML = 'Frog - The frog is the part of the bow that the violinist holds. The frog is where all the mechanics of the bow happen.'
                bpara2.style.color = 'rgba(50,50,155,1)';
                
                bpara3.innerHTML = 'Screw - The screw is on the end of the frog which tightens and loosens the hair. If the screw on the end of the frog is completely unscrewed then the frog comes off the bow (it is easy to reattach) when the screw is tightened it stretches the hair of the bow closer to the end of the bow, thus tightening the tension of the hairs.'
                bpara3.style.color = 'rgba(50,50,155,1)';
                
                bpara4.innerHTML = 'Stick - The main stick of the bow is usually made of wood, sometimes with a metal core. The stick needs to be supple and bendy to be able to support the tightening and loosening of the bow hair. A good bow should be light, and have a balance point (the point where you can balance the bow on one finger) around a quarter of the way up the bow from the frog. The balance point is important as it allows the violinist to perform advanced technical movements like spiccato (where the bow bounces off the string between each note).'
                bpara4.style.color = 'rgba(50,50,155,1)';
                
                bpara5.innerHTML = 'Pad - The pad of the bow assists the player in holding the bow.'
                bpara5.style.color = 'rgba(50,50,155,1)';
                
                getPartsHeading.innerHTML = 'Parts of the Bow'
                getPartsHeading.style.fontSize = '2vw';
            };

        });
        
    document.getElementById('toVioButton').addEventListener('click', function(){

            vioPartImg.src = ('images/viopartdisp.png');
            bowPartImg.src = ('');

            toBowButton.style.display = 'inline';
            toVioButton.style.display = 'none';

            var vpara1 = document.getElementById('vp1');
            var vpara2 = document.getElementById('vp2');
            var vpara3 = document.getElementById('vp3');
            var vpara4 = document.getElementById('vp4');
            var vpara5 = document.getElementById('vp5');

            var bpara1 = document.getElementById('bp1');
            var bpara2 = document.getElementById('bp2');
            var bpara3 = document.getElementById('bp3');
            var bpara4 = document.getElementById('bp4');
            var bpara5 = document.getElementById('bp5');

            bpara1.innerHTML = '';
            bpara2.innerHTML = '';
            bpara3.innerHTML = '';
            bpara4.innerHTML = '';
            bpara5.innerHTML = '';

            vpara1.innerHTML = 'Tuning Pegs/Pegbox - The tuning pegs and pegbox are located at the top of the instrument by the scroll. This is where the strings are attached at the top. The end of the string is inserted into a hole in the peg, which is then wound in order to tighten the string. The majority of tuning is performed by tightening the peg, with fine tuners being used for strings out by less than half a tone.'
            vpara1.style.color = 'rgba(50,50,155,1)';

            vpara2.innerHTML = 'Strings - The strings on the violin are tuned G,D,A,E from lowest to highest. Strings differ significantly in quality, and the quality of the strings makes a considerable difference to the tonal quality produced by the instrument. Strings are made from a variety of different metals (mainly aluminium, steel and gold for the E-string).'
            vpara2.style.color = 'rgba(50,50,155,1)';

            vpara3.innerHTML = 'Fingerboard - The fingerboard is the smooth black playing surface glued to the neck of the violin underneath the strings. Violinists sometimes get black residue on their fingers on the left-hand due to the black polish rubbing off. Eventually the fingerboard would need refinishing if this starts to happen.'
            vpara3.style.color = 'rgba(50,50,155,1)';

            vpara4.innerHTML = 'Fine Tuners - Fine tuners can be found either on all four strings, or just the E string. If you are a beginner, it is best to choose a violin with four fine tuners as it makes it significantly less likely that you will break a string while tuning. Fine tuners are essentially a screw that presses down a lever that then tightens the string fractionally. When a fine tuner reaches the end of the screw, it should be unscrewed completely and then the peg should be tightened before again using the fine tuner.'
            vpara4.style.color = 'rgba(50,50,155,1)';

            vpara5.innerHTML = 'Bridge - The bridge of the violin comes in varying angles of curvature. A smaller angle makes it easier to play double or triple stops (playing two or three strings at the same time.) Whereas more curved bridges make it easier to hit the right notes without scraping across a wrong string. Classical violinists tend to have more curved bridges. Fiddle or country players have flatter bridges.'
            vpara5.style.color = 'rgba(50,50,155,1)';

            getPartsHeading.innerHTML = 'Parts of the Violin'
        getPartsHeading.style.fontSize = '2vw';
        });

    
    document.getElementById('toBowButton').addEventListener('click', function(){

            vioPartImg.src = ('');
            bowPartImg.src = ('images/bowpartdisp.png');

            toBowButton.style.display = 'none';
            toVioButton.style.display = 'inline';

            var vpara1 = document.getElementById('vp1');
            var vpara2 = document.getElementById('vp2');
            var vpara3 = document.getElementById('vp3');
            var vpara4 = document.getElementById('vp4');
            var vpara5 = document.getElementById('vp5');

            var bpara1 = document.getElementById('bp1');
            var bpara2 = document.getElementById('bp2');
            var bpara3 = document.getElementById('bp3');
            var bpara4 = document.getElementById('bp4');
            var bpara5 = document.getElementById('bp5');

            vpara1.innerHTML = '';
            vpara2.innerHTML = '';
            vpara3.innerHTML = '';
            vpara4.innerHTML = '';
            vpara5.innerHTML = '';

            bpara1.innerHTML = 'Hair - The hair of the bow is the part that touches the string when playing. Usually the hair is made out of either a synthetic material or horse hair, and these strands need to be well-rosined to produce sound. If your bow is not well rosined, you may find that it slips on the string and produces a softer, whisper-like tone.'
            bpara1.style.color = 'rgba(50,50,155,1)';
                
            bpara2.innerHTML = 'Frog - The frog is the part of the bow that the violinist holds. The frog is where all the mechanics of the bow happen.'
            bpara2.style.color = 'rgba(50,50,155,1)';
                
            bpara3.innerHTML = 'Screw - The screw is on the end of the frog which tightens and loosens the hair. If the screw on the end of the frog is completely unscrewed then the frog comes off the bow (it is easy to reattach) when the screw is tightened it stretches the hair of the bow closer to the end of the bow, thus tightening the tension of the hairs.'
            bpara3.style.color = 'rgba(50,50,155,1)';
                
            bpara4.innerHTML = 'Stick - The main stick of the bow is usually made of wood, sometimes with a metal core. The stick needs to be supple and bendy to be able to support the tightening and loosening of the bow hair. A good bow should be light, and have a balance point (the point where you can balance the bow on one finger) around a quarter of the way up the bow from the frog. The balance point is important as it allows the violinist to perform advanced technical movements like spiccato (where the bow bounces off the string between each note).'
            bpara4.style.color = 'rgba(50,50,155,1)';
                
            bpara5.innerHTML = 'Pad - The pad of the bow assists the player in holding the bow.'
            bpara5.style.color = 'rgba(50,50,155,1)';

            getPartsHeading.innerHTML = 'Parts of the Bow';
            getPartsHeading.style.fontSize = '2vw'; 
        });
    
    document.getElementById('vioBox').style.display = 'inline';
   
});


/*----------------basicis--------------*/
document.getElementById('basics').addEventListener('click', function(){
    if (histclick > 0){
        document.getElementById('narrator').style.display = 'none';
    }if (vioclick > 0){
        document.getElementById('vioBox').style.display = 'none';
    };
});

/*----------------rcm--------------*/
document.getElementById('rcm').addEventListener('click', function(){
    if (histclick > 0){
        document.getElementById('narrator').style.display = 'none';
    }if (vioclick > 0){
        document.getElementById('vioBox').style.display = 'none';
    };
});

/*----------------notemapping--------------*/
document.getElementById('notemapping').addEventListener('click', function(){
    if (histclick > 0){
        document.getElementById('narrator').style.display = 'none';
    }if (vioclick > 0){
        document.getElementById('vioBox').style.display = 'none';
    }if (noteclick == 0){
        
        //div vars//
        var mapDiv = document.createElement('div');
        mapDiv.id = 'noteMap';
        
        var picBox = document.createElement('div');
        picBox.id = 'imgBox';
        
        var noteImg = document.createElement('img');
        noteImg.id = 'noteMapImg';
        
        //notes highlight var//
        var notePos = document.createElement('div');
        notePos.id = 'noteCoord';
        
        //Notes By String//
        //G String//
        var noteGG = document.createElement('div');
        noteGG.id = 'GG';
        var noteGGsAb = document.createElement('div');
        noteGGsAb.id = 'GGsAb';
        var noteGA = document.createElement('div');
        noteGA.id = 'GA';
        var noteGAsBb = document.createElement('div');
        noteGAsBb.id = 'GAsBb';
        var noteGB = document.createElement('div');
        noteGB.id = 'GB';
        var noteGC = document.createElement('div');
        noteGC.id = 'GC';
        var noteGCsDb = document.createElement('div');
        noteGCsDb.id = 'GCsDb';
        var noteGD = document.createElement('div');
        noteGD.id = 'GD';
        
        //D String//
        var noteDD = document.createElement('div');
        noteDD.id = 'DD';
        var noteDDsEb = document.createElement('div');
        noteDDsEb.id = 'DDsEb';
        var noteDE = document.createElement('div');
        noteDE.id = 'DE';
        var noteDF = document.createElement('div');
        noteDF.id = 'DF';
        var noteDFsGb = document.createElement('div');
        noteDFsGb.id = 'DFsGb';
        var noteDG = document.createElement('div');
        noteDG.id = 'DG';
        var noteDGsAb = document.createElement('div');
        noteDGsAb.id = 'DGsAb';
        var noteDA = document.createElement('div');
        noteDA.id = 'DA';
        
        //A String//
        
        var noteAA = document.createElement('div');
        noteAA.id = 'AA';
        var noteAAsBb = document.createElement('div');
        noteAAsBb.id = 'AAsBb';
        var noteAB = document.createElement('div');
        noteAB.id = 'AB';
        var noteAC = document.createElement('div');
        noteAC.id = 'AC';
        var noteACsDb = document.createElement('div');
        noteACsDb.id = 'ACsDb';
        var noteAD = document.createElement('div');
        noteAD.id = 'AD';
        var noteADsEb = document.createElement('div');
        noteADsEb.id = 'ADsEb';
        var noteAE = document.createElement('div');
        noteAE.id = 'AE';
        
        //E String//
        
        var noteEE = document.createElement('div');
        noteEE.id = 'EE';
        var noteEF = document.createElement('div');
        noteEF.id = 'EF';
        var noteEFsGb = document.createElement('div');
        noteEFsGb.id = 'EFsGb';
        var noteEG = document.createElement('div');
        noteEG.id = 'EG';
        var noteEGsAb = document.createElement('div');
        noteEGsAb.id = 'EGsAb';
        var noteEA = document.createElement('div');
        noteEA.id = 'EA';
        var noteEAsBb = document.createElement('div');
        noteEAsBb.id = 'EAsBb';
        var noteEB = document.createElement('div');
        noteEB.id = 'EB';
        
        //apendChilds//
        document.getElementById('backImage').appendChild(mapDiv)
        var noteMap = document.getElementById('noteMap');
        noteMap.appendChild(picBox);
        
        var picDiv = document.getElementById('imgBox');
        picDiv.appendChild(notePos);
        picDiv.appendChild(noteImg);
        
        //append note divs//
        picDiv.appendChild(noteGG);
        picDiv.appendChild(noteGGsAb);
        picDiv.appendChild(noteGA);
        picDiv.appendChild(noteGAsBb);
        picDiv.appendChild(noteGB);
        picDiv.appendChild(noteGC);
        picDiv.appendChild(noteGCsDb);
        picDiv.appendChild(noteGD);
        
        picDiv.appendChild(noteDD);
        picDiv.appendChild(noteDDsEb);
        picDiv.appendChild(noteDE);
        picDiv.appendChild(noteDF);
        picDiv.appendChild(noteDFsGb);
        picDiv.appendChild(noteDG);
        picDiv.appendChild(noteDGsAb);
        picDiv.appendChild(noteDA);
        
        picDiv.appendChild(noteAA);
        picDiv.appendChild(noteAAsBb);
        picDiv.appendChild(noteAB);
        picDiv.appendChild(noteAC);
        picDiv.appendChild(noteACsDb);
        picDiv.appendChild(noteAD);
        picDiv.appendChild(noteADsEb);
        picDiv.appendChild(noteAE);
        
        picDiv.appendChild(noteEE);
        picDiv.appendChild(noteEF);
        picDiv.appendChild(noteEFsGb);
        picDiv.appendChild(noteEG);
        picDiv.appendChild(noteEGsAb);
        picDiv.appendChild(noteEA);
        picDiv.appendChild(noteEAsBb);
        picDiv.appendChild(noteEB);
        
        
        var noteMapImg = document.getElementById('noteMapImg');
        noteMapImg.src = ('images/notemap.png');
        
        var noteCoord = document.getElementById('noteCoord');
        
        var GG = document.getElementById('GG');
        var GGsAb = document.getElementById('GGsAb');
        var GA = document.getElementById('GA');
        var GAsBb = document.getElementById('GAsBb');
        var GB = document.getElementById('GB');
        var GC = document.getElementById('GC');
        var GCsDb = document.getElementById('GCsDb');
        var GD = document.getElementById('GD');
        
        var DD = document.getElementById('DD');
        var DDsEb = document.getElementById('DDsEb');
        var DE = document.getElementById('DE');
        var DF = document.getElementById('DF');
        var DFsGb = document.getElementById('DFsGb');
        var DG = document.getElementById('DG');
        var DGsAb = document.getElementById('DGsAb');
        var DA = document.getElementById('DA');
        
        var AA = document.getElementById('AA');
        var AAsBb = document.getElementById('AAsBb');
        var AB = document.getElementById('AB');
        var AC = document.getElementById('AC');
        var ACsDb = document.getElementById('ACsDb');
        var AD = document.getElementById('AD');
        var ADsEb = document.getElementById('ADsEb');
        var AE = document.getElementById('AE');
        
        var EE = document.getElementById('EE');
        var EF = document.getElementById('EF');
        var EFsGb = document.getElementById('EFsGb');
        var EG = document.getElementById('EG');
        var EGsAb = document.getElementById('EGsAb');
        var EA = document.getElementById('EA');
        var EAsBb = document.getElementById('EAsBb');
        var EB = document.getElementById('EB');
        
        
        //styling//
        noteMap.style.left = '0px';
        noteMap.style.bottom = '0px';
        noteMap.style.top = '0px';
        noteMap.style.right = '0px';
        noteMap.style.margin = 'auto';
        noteMap.style.position = 'absolute';
        noteMap.style.height = '65vh';
        noteMap.style.width = '75vw';
        
        picDiv.style.left = '10%';
        picDiv.style.bottom = '0';
        picDiv.style.top = '0';
        picDiv.style.margin = 'auto';
        picDiv.style.position = 'absolute';
        picDiv.style.height = '75%';
        
        noteMapImg.style.maxHeight = "100%";
        noteMapImg.style.maxWidth = "100%";
        
        //G STRING DIV STYLE//
        GG.style.position = 'absolute';
        GG.style.height = '10%';
        GG.style.width = '10%';
        GG.style.left  = '24.1%';
        GG.style.bottom = '84.2%';
        //GG.style.backgroundColor = 'blue';
        
        GGsAb.style.position = 'absolute';
        GGsAb.style.height = '10%';
        GGsAb.style.width = '10%';
        GGsAb.style.left  = '24.1%';
        GGsAb.style.bottom = '72.7%';
        //GGsAb.style.backgroundColor = 'blue';
        
        GA.style.position = 'absolute';
        GA.style.height = '10%';
        GA.style.width = '10%';
        GA.style.left  = '24.1%';
        GA.style.bottom = '61.2%';
        //GA.style.backgroundColor = 'blue';
        
        GAsBb.style.position = 'absolute';
        GAsBb.style.height = '10%';
        GAsBb.style.width = '10%';
        GAsBb.style.left  = '24.1%';
        GAsBb.style.bottom = '49.7%';
        //GAsBb.style.backgroundColor = 'blue';
        
        GB.style.position = 'absolute';
        GB.style.height = '10%';
        GB.style.width = '10%';
        GB.style.left  = '24.1%';
        GB.style.bottom = '38.3%';
        //GB.style.backgroundColor = 'blue';
        
        GC.style.position = 'absolute';
        GC.style.height = '10%';
        GC.style.width = '10%';
        GC.style.left  = '24.1%';
        GC.style.bottom = '26.8%';
        //GC.style.backgroundColor = 'blue';
        
        GCsDb.style.position = 'absolute';
        GCsDb.style.height = '10%';
        GCsDb.style.width = '10%';
        GCsDb.style.left  = '24.1%';
        GCsDb.style.bottom = '15.3%';
        //GCsDb.style.backgroundColor = 'blue';
        
        GD.style.position = 'absolute';
        GD.style.height = '10%';
        GD.style.width = '10%';
        GD.style.left  = '24.1%';
        GD.style.bottom = '3.8%';
        //GD.style.backgroundColor = 'blue';
        
        
        //D STRING DIV STYLE//
        DD.style.position = 'absolute';
        DD.style.height = '10%';
        DD.style.width = '10%';
        DD.style.left  = '35.3%';
        DD.style.bottom = '84.2%';
        //DD.style.backgroundColor = 'blue';
        
        DDsEb.style.position = 'absolute';
        DDsEb.style.height = '10%';
        DDsEb.style.width = '10%';
        DDsEb.style.left  = '35.3%';
        DDsEb.style.bottom = '72.7%';
        //DDsEb.style.backgroundColor = 'blue';
        
        DE.style.position = 'absolute';
        DE.style.height = '10%';
        DE.style.width = '10%';
        DE.style.left  = '35.3%';
        DE.style.bottom = '61.2%';
        //DE.style.backgroundColor = 'blue';
        
        DF.style.position = 'absolute';
        DF.style.height = '10%';
        DF.style.width = '10%';
        DF.style.left  = '35.3%';
        DF.style.bottom = '49.7%';
        //DF.style.backgroundColor = 'blue';
        
        DFsGb.style.position = 'absolute';
        DFsGb.style.height = '10%';
        DFsGb.style.width = '10%';
        DFsGb.style.left  = '35.3%';
        DFsGb.style.bottom = '38.3%';
        //DFsGb.style.backgroundColor = 'blue';
        
        DG.style.position = 'absolute';
        DG.style.height = '10%';
        DG.style.width = '10%';
        DG.style.left  = '35.3%';
        DG.style.bottom = '26.8%';
        //DG.style.backgroundColor = 'blue';
        
        DGsAb.style.position = 'absolute';
        DGsAb.style.height = '10%';
        DGsAb.style.width = '10%';
        DGsAb.style.left  = '35.3%';
        DGsAb.style.bottom = '15.3%';
        //DGsAb.style.backgroundColor = 'blue';
        
        DA.style.position = 'absolute';
        DA.style.height = '10%';
        DA.style.width = '10%';
        DA.style.left  = '35.3%';
        DA.style.bottom = '3.8%';
        //DA.style.backgroundColor = 'blue';
        
        
        //A STRING DIV STYLE//
        AA.style.position = 'absolute';
        AA.style.height = '10%';
        AA.style.width = '10%';
        AA.style.left  = '46.5%';
        AA.style.bottom = '84.2%';
        //AA.style.backgroundColor = 'blue';
        
        AAsBb.style.position = 'absolute';
        AAsBb.style.height = '10%';
        AAsBb.style.width = '10%';
        AAsBb.style.left  = '46.5%';
        AAsBb.style.bottom = '72.7%';
        //AAsBb.style.backgroundColor = 'blue';
        
        AB.style.position = 'absolute';
        AB.style.height = '10%';
        AB.style.width = '10%';
        AB.style.left  = '46.5%';
        AB.style.bottom = '61.2%';
        //AB.style.backgroundColor = 'blue';
        
        AC.style.position = 'absolute';
        AC.style.height = '10%';
        AC.style.width = '10%';
        AC.style.left  = '46.5%';
        AC.style.bottom = '49.7%';
        //AC.style.backgroundColor = 'blue';
        
        ACsDb.style.position = 'absolute';
        ACsDb.style.height = '10%';
        ACsDb.style.width = '10%';
        ACsDb.style.left  = '46.5%';
        ACsDb.style.bottom = '38.3%';
        //ACsDb.style.backgroundColor = 'blue';
        
        AD.style.position = 'absolute';
        AD.style.height = '10%';
        AD.style.width = '10%';
        AD.style.left  = '46.5%';
        AD.style.bottom = '26.8%';
        //AD.style.backgroundColor = 'blue';
        
        ADsEb.style.position = 'absolute';
        ADsEb.style.height = '10%';
        ADsEb.style.width = '10%';
        ADsEb.style.left  = '46.5%';
        ADsEb.style.bottom = '15.3%';
        //ADsEb.style.backgroundColor = 'blue';
        
        AE.style.position = 'absolute';
        AE.style.height = '10%';
        AE.style.width = '10%';
        AE.style.left  = '46.5%';
        AE.style.bottom = '3.8%';
        //AE.style.backgroundColor = 'blue';
        
        
        //E STRING DIV STYLE//
        EE.style.position = 'absolute';
        EE.style.height = '10%';
        EE.style.width = '10%';
        EE.style.left  = '57.6%';
        EE.style.bottom = '84.2%';
        //EE.style.backgroundColor = 'blue';
        
        EF.style.position = 'absolute';
        EF.style.height = '10%';
        EF.style.width = '10%';
        EF.style.left  = '57.6%';
        EF.style.bottom = '72.7%';
        //EF.style.backgroundColor = 'blue';
        
        EFsGb.style.position = 'absolute';
        EFsGb.style.height = '10%';
        EFsGb.style.width = '10%';
        EFsGb.style.left  = '57.6%';
        EFsGb.style.bottom = '61.2%';
        //EFsGb.style.backgroundColor = 'blue';
        
        EG.style.position = 'absolute';
        EG.style.height = '10%';
        EG.style.width = '10%';
        EG.style.left  = '57.6%';
        EG.style.bottom = '49.7%';
        //EG.style.backgroundColor = 'blue';
        
        EGsAb.style.position = 'absolute';
        EGsAb.style.height = '10%';
        EGsAb.style.width = '10%';
        EGsAb.style.left  = '57.6%';
        EGsAb.style.bottom = '38.3%';
        //EGsAb.style.backgroundColor = 'blue';
        
        EA.style.position = 'absolute';
        EA.style.height = '10%';
        EA.style.width = '10%';
        EA.style.left  = '57.6%';
        EA.style.bottom = '26.8%';
        //EA.style.backgroundColor = 'blue';
        
        EAsBb.style.position = 'absolute';
        EAsBb.style.height = '10%';
        EAsBb.style.width = '10%';
        EAsBb.style.left  = '57.6%';
        EAsBb.style.bottom = '15.3%';
        //EAsBb.style.backgroundColor = 'blue';
        
        EB.style.position = 'absolute';
        EB.style.height = '10%';
        EB.style.width = '10%';
        EB.style.left  = '57.6%';
        EB.style.bottom = '3.8%';
        //EB.style.backgroundColor = 'blue';
        
        
        
        
        //Note Highlights//
        
        noteclick = noteclick + 1;
    };
    
    //Gstring//
    //sound plays for G String//
    document.getElementById('GG').addEventListener('click', function(){
       soundGG.play(); 
    });document.getElementById('GGsAb').addEventListener('click', function(){
       soundGGsAb.play(); 
    });document.getElementById('GA').addEventListener('click', function(){
       soundGA.play(); 
    });document.getElementById('GAsBb').addEventListener('click', function(){
       soundGAsBb.play(); 
    });document.getElementById('GB').addEventListener('click', function(){
       soundGB.play(); 
    });document.getElementById('GC').addEventListener('click', function(){
       soundGC.play(); 
    });document.getElementById('GCsDb').addEventListener('click', function(){
       soundGCsDb.play(); 
    });document.getElementById('GD').addEventListener('click', function(){
       soundGD.play(); 
    });
    
    //Dstring//
    //sound plays for D String//
    document.getElementById('DD').addEventListener('click', function(){
       soundDD.play(); 
    });document.getElementById('DDsEb').addEventListener('click', function(){
       soundDDsEb.play(); 
    });document.getElementById('DE').addEventListener('click', function(){
       soundDE.play(); 
    });document.getElementById('DF').addEventListener('click', function(){
       soundDF.play(); 
    });document.getElementById('DFsGb').addEventListener('click', function(){
       soundDFsGb.play(); 
    });document.getElementById('DG').addEventListener('click', function(){
       soundDG.play(); 
    });document.getElementById('DGsAb').addEventListener('click', function(){
       soundDGsAb.play(); 
    });document.getElementById('DA').addEventListener('click', function(){
       soundDA.play(); 
    });
    
    //AString//
    //sound plays for A String//
    document.getElementById('AA').addEventListener('click', function(){
       soundAA.play(); 
    });document.getElementById('AAsBb').addEventListener('click', function(){
       soundAAsBb.play(); 
    });document.getElementById('AB').addEventListener('click', function(){
       soundAB.play(); 
    });document.getElementById('AC').addEventListener('click', function(){
       soundAC.play(); 
    });document.getElementById('ACsDb').addEventListener('click', function(){
       soundACsDb.play(); 
    });document.getElementById('AD').addEventListener('click', function(){
       soundAD.play(); 
    });document.getElementById('ADsEb').addEventListener('click', function(){
       soundADsEb.play(); 
    });document.getElementById('AE').addEventListener('click', function(){
       soundAE.play(); 
    });
    
    //EString//
    //sound plays for E String//
    document.getElementById('EE').addEventListener('click', function(){
       soundEE.play(); 
    });document.getElementById('EF').addEventListener('click', function(){
       soundEF.play(); 
    });document.getElementById('EFsGb').addEventListener('click', function(){
       soundEFsGb.play(); 
    });document.getElementById('EG').addEventListener('click', function(){
       soundEG.play(); 
    });document.getElementById('EGsAb').addEventListener('click', function(){
       soundEGsAb.play(); 
    });document.getElementById('EA').addEventListener('click', function(){
       soundEA.play(); 
    });document.getElementById('EAsBb').addEventListener('click', function(){
       soundEAsBb.play(); 
    });document.getElementById('EB').addEventListener('click', function(){
       soundEB.play(); 
    });
    
});


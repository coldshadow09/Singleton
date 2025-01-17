var $ = jQuery = require('jquery');
require('scripts/../jquery.csv.js');

// tsne parameters
$scope.tsneInfoDisplay = 'iteration: 0, cost:0';
$scope.tsneLearningRate = 10;
$scope.tsnePerplexity = 4;
var maxIteration = 800;

// Other variables used by the controller
var scatterPlot = new ScatterPlot({'svg':d3.select("#mainSvg"), 'showLabels':$scope.showLabels, 'hideOverlappingLabels':true,
					'mouseover':circleMouseover, 'mouseout':circleMouseout});
var keepRunning = true;
var intervalId = -1;	// for setInterval method used by tsne clustering

$.ajax({
    url: "datasets/../../../mdp.rpkm.1.0.sampleDist.csv",
    async: false,
    success: function (csvd) {
        distanceSubset = $.csv.toArrays(csvd);
    },
    dataType: "text",

});

$scope.plot = function()
{
    // need source of selectedSampleGroup
    var selectedSampleGroup;
	var tsne;
	var tx=0, ty=0;
	var ss=1;

	// data for scatterPlot
	var data = [];
	for (var i=0; i<samplesSubset.length; i++)
	   data.push({'name':samplesSubset[i][$scope.selectedSampleGroup], 'x':0, 'y':0,
				  'colour':colourFromSampleGroup[$scope.selectedSampleGroup][samplesSubset[i][$scope.selectedSampleGroup]]});

	function step()
	{
	   if(keepRunning) {
		   var cost = tsne.step(); // do a few steps
		   $scope.tsneInfoDisplay = "iteration: " + tsne.iter + ", cost: " + cost.toFixed(2);
		   if (tsne.iter>maxIteration) $scope.stopTsne();
	   }

	   // get current solution
	   var Y = tsne.getSolution();

	   // update the plot
	   for (var i=0; i<data.length; i++) {
		   data[i]['x'] = Y[i][0];
		   data[i]['y'] = Y[i][1];
	   }
	   scatterPlot.draw(data);
	}

	keepRunning = true;
	tsne = new tsnejs.tSNE({epsilon: parseFloat($scope.tsneLearningRate),
						   perplexity: parseInt($scope.tsnePerplexity),
						   dim: data.length}); // create a tSNE instance
	tsne.initDataDist(distancesSubset);

	scatterPlot.draw(data);

	// Repeat run at regular intervals (milliseconds).
	// Using angular's $interval wrapper means no need for $scope.$apply for $scope variables
	//intervalId = setInterval(step, 100);
	intervalId = $interval(step, 100);
}

$scope.stopTsne = function()
{
   keepRunning = false;
   $interval.cancel(intervalId);
   //clearInterval(intervalId);
}
// Animate gifs

$(document).on('click', 'img', function(event) {
		event.preventDefault()

			$(this).addClass('animated wobble');
			var src = $(this).attr('src');
			if($(this).hasClass('playing')){
				//stop
			$(this).attr('src', src.replace("giphy.gif", 'giphy_s.gif'))
			$(this).removeClass('playing');
			} else {
				//play
				$(this).addClass('playing');
				$(this).attr('src', src.replace("_s",''))
			}
						
setTimeout(function(){
	$(this).removeClass('animated wobble');
		},250)
	});

	
			//initial array of topics
			var topics = ["Corgi Puppies", "Lego Batman", "Mickey and Minnie", "Bugs Bunny", "Simpsons",
				"Yo-Kai Watch", "Futurama", "Ron Swanson", "Ninjago", "Classic Disney Cartoons"];
			
			//displayTopicInfo function re-renders HTML to display appropriate content
			function displayTopicInfo() {
				var topic = $(this).attr("data-name");
				var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";
				$.ajax({url:queryURL, method:'GET'})
				.done(function(response){
				}

			//create AJAX call for specific topic button clicked
			
			); $.ajax({url:queryURL, method:'GET'})
				.done(function(response){
					var results = response.data;
			
			$("#topics-view").empty();
			for (var i = 0; i < results.length; i++) {
				

			var gifDiv = $("<div class='item col-md-3'>");
				var rating = results[i].rating;
				var p = $("<p>").text("Rating: " + rating);
					var topicImage = $("<img>");

					//.data["0"].images.original_still.url
					topicImage.attr("src", results[i].images.original_still.url);
					gifDiv.prepend(p);
					gifDiv.prepend(topicImage);

					// Display gif images
					$("#topics-view").prepend(gifDiv);
					
					}
					
					});

					}

					// Function for displaying topic data
					function renderButtons() {
					
					// Deleting the buttons prior to adding new topics
					// (this is necessary otherwise you will have repeat buttons)
					$("#buttons-view").empty();
					
					// Looping through the array of topics
					for (var i = 0; i < topics.length; i++) {
					
					// Then dynamicaly generating buttons for each topic in the array
					// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
					var a = $("<button class ='btn btn-primary'>");
					// Adding a class of movie to our button
					a.addClass("topic");
					// Adding a data-attribute
					a.attr("data-name", topics[i]);
					// Providing the initial button text
					a.text(topics[i]);
					// Adding the button to the buttons-view div
					$("#buttons-view").append(a);
					}
					}
					// This function handles events where one button is clicked
					$("#add-topic").on("click", function(event) {
					event.preventDefault();
					
					// This line grabs the input from the textbox
					var topic = $("#topic-input").val().trim();
					
					// Adding the topic from the textbox to our array
					topics.push(topic);
					
					// Calling renderButtons which handles the processing of our movie array
					renderButtons();
					});
					
					// Function for displaying the topic info
					// Using $(document).on instead of $(".topic").on to add event listeners to dynamically generated elements
					$(document).on("click", ".topic", displayTopicInfo);
					
					// Calling the renderButtons function to display the intial buttons
					renderButtons();
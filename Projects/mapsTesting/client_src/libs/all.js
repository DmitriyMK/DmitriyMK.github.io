pannellum.viewer('panorama', {
	"type": "equirectangular",
	"autoLoad": true,
	"compass": true,

	// "panorama": "https://upload.wikimedia.org/wikipedia/commons/4/40/The_Facade_of_Birla_Auditorium%2C_A_360_Panorama-interactive_100_Pix_HDR-20130301.JPG",

	"default": {
		"firstScene": "scene1",
		"title": "DreamHouse",
		"author": "PushKa Solutions",
		"sceneFadeDuration": 1000,

		"panorama": "https://pannellum.org/images/bma-0.jpg",

		"hotSpots": [
		{
			"pitch": 10,
			"yaw": 15,
			"type": "info",
			"text": "Something intresting",
			"URL": "http://landingpage.push-k.ua/"
		}
		],
	},

	"scenes": {

		"scene1": {
			"type": "equirectangular",
			"panorama": "https://upload.wikimedia.org/wikipedia/commons/4/40/The_Facade_of_Birla_Auditorium%2C_A_360_Panorama-interactive_100_Pix_HDR-20130301.JPG",

			"hfov": 100,
			"pitch": -7,
			"yaw": 0,
			
			"hotSpots": [
			{
				"pitch": 9,
				"yaw": -1,
				"type": "scene",
				"text": "Voila la maison",
				"sceneId": "scene2",
			},
			{
				"pitch": 9,
				"yaw": -15,
				"type": "scene",
				"text": "Voila la maison2",
				"sceneId": "scene3",
			},
			],

		},

		"scene2": {

			"hfov": 110,
			"yaw": 5,
			"type": "equirectangular",
			"panorama": "https://pannellum.org/images/bma-0.jpg",

			"hotSpots": [{
				"pitch": -0.6,
				"yaw": 37.1,
				"type": "scene",
				"text": "Mason Circle",
				"sceneId": "circle",
				"targetYaw": -23,
				"targetPitch": 2
			}]
		},

		"scene3": {

			"hfov": 110,
			"yaw": 5,
			"type": "equirectangular",
			"panorama": "https://pannellum.org/images/bma-0.jpg",

			"hotSpots": [{
				"pitch": -0.6,
				"yaw": 37.1,
				"type": "scene",
				"text": "Mason Circle",
				"sceneId": "circle",
				"targetYaw": -23,
				"targetPitch": 2
			}]
		}
	}
});



// picture for preview (working if "autoLoad": false,)
// "preview": "http://mediad.publicbroadcasting.net/p/kalw/files/styles/medium/public/201601/Nature-Brain.jpg",

// "hotSpots": [
//     {
//         "pitch": 10,
//         "yaw": 15,
//         "type": "info",
//         "text": "Something intresting",
//         "URL": "http://landingpage.push-k.ua/"
//     }
// ]
//
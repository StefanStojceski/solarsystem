(function () {

	var webglEl = document.getElementById('webgl');

	if (!Detector.webgl) {
		Detector.addGetWebGLMessage(webglEl);
		return;
	}

	var width  = window.innerWidth,
		height = window.innerHeight;
	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000);
	camera.position.set(0,2.5,5);  // ADD CAMERA
	
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height); // ADD RENDERER

	// <----------------------------------------------- SCENE LIGHTS ------------------------------------------------------------------------>


	
	var ambientLight = new THREE.AmbientLight(0x444444);
	
    scene.add(ambientLight);

   
// <------------------------------------------------------------------------------------------------------------------------------------------>


// <-----------------------------------------------CODE FOR PLANET ORBITAL RINGS AROUND SUN -------------------------------------------------->


// MERCURY ORBITAL RING

var geometry = new THREE.RingGeometry( 12.99, 13, 32 );
		var material = new THREE.MeshBasicMaterial( { 
			
			side: THREE.DoubleSide ,
			color: 0xffffee
			
		} );
		
		var mesh1 = new THREE.Mesh( geometry, material );
		mesh1.position.set(35, 35, 0);
		mesh1.rotation.x = Math.PI / 2;
		scene.add( mesh1 );

// VENUS ORBITAL RING

var geometry = new THREE.RingGeometry( 15.99, 16, 32 );
		var material = new THREE.MeshBasicMaterial( { 
			
			side: THREE.DoubleSide ,
			color: 0xffffee
			
		} );
		
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.set(35, 35, 0);
		mesh.rotation.x = Math.PI / 2;
		scene.add( mesh );

 // EARTH ORBITAL RING

 var geometry = new THREE.RingGeometry( 20.49, 20.5, 32 );
		var material = new THREE.MeshBasicMaterial( { 
			
			side: THREE.DoubleSide ,
			color: 0xffffee
			
		} );
		
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.set(35, 35, 0);
		mesh.rotation.x = Math.PI / 2;
		scene.add( mesh );


// MARS ORBIRAL RING

var geometry = new THREE.RingGeometry( 24.99, 25, 32 );
		var material = new THREE.MeshBasicMaterial( { 
			
			side: THREE.DoubleSide ,
			color: 0xffffee
			
		} );
		
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.set(35, 35, 0);
		mesh.rotation.x = Math.PI / 2;
		scene.add( mesh );

		// JUPITER ORBITAL RING

		var geometry = new THREE.RingGeometry( 37.99, 38, 32 );
		var material = new THREE.MeshBasicMaterial( { 
			
			side: THREE.DoubleSide ,
			color: 0xffffee
			
		} );
		
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.set(35, 35, 0);
		mesh.rotation.x = Math.PI / 2;
		scene.add( mesh );

		// SATURN ORBITAL RING

		var geometry = new THREE.RingGeometry( 56.99, 57, 32 );
		var material = new THREE.MeshBasicMaterial( { 
			
			side: THREE.DoubleSide ,
			color: 0xffffee
			
		} );
		
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.set(35, 35, 0);
		mesh.rotation.x = Math.PI / 2;
		scene.add( mesh );

		// URANUS ORBIRAL RING 


		var geometry = new THREE.RingGeometry( 72.99, 73, 32 );
		var material = new THREE.MeshBasicMaterial( { 
			
			side: THREE.DoubleSide ,
			color: 0xffffee
			
		} );
		
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.set(35, 35, 0);
		mesh.rotation.x = Math.PI / 2;
		scene.add( mesh );


		// NEPTUNE ORBITAL RING

		var geometry = new THREE.RingGeometry( 99.99, 100, 32 );
		var material = new THREE.MeshBasicMaterial( { 
			
			side: THREE.DoubleSide ,
			color: 0xffffee
			
		} );
		
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.set(35, 35, 0);
		mesh.rotation.x = Math.PI / 2;
		scene.add( mesh );


		// PLUTO ORBIRAL RING

		var geometry = new THREE.RingGeometry( 126.99, 127, 32 );
		var material = new THREE.MeshBasicMaterial( { 
			
			side: THREE.DoubleSide ,
			color: 0xffffee
			
		} );
		
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.set(35, 35, 0);
		mesh.rotation.x = Math.PI / 2;
		scene.add( mesh );


	//	<-------------------------------------------------------------------------------------------------------------------------------------->

	//	<-------------------------------------- CODE FOR CREATING THE PLANETS AND THE SUN ----------------------------------------------------->

	// Earth params
	var radius   = 0.5,
		segments = 32,
		rotation = 6;  
		

	var sphere = createSphere(radius, segments);
	sphere.rotation.y = rotation; 	
	sphere.position.y = 35;
		sphere.position.x = -20.5;
		sphere.position.z = 0;
	
		
	scene.add(sphere) // CREATING SPHERE EARTH

    var clouds = createClouds(radius, segments);
	clouds.rotation.y = rotation;
	clouds.position.y = 35;
		clouds.position.x = -20.5;
		clouds.position.z = 0;
	scene.add(clouds) // CREATING CLOUDS

	var stars = createStars(360, 256);
	scene.add(stars); // CREATING STARS 

	var controls = new THREE.TrackballControls(camera); // CONTROLLING CAMERA (ZOOM, ROTATION ETC)

	

		function createSphere(radius, segments) {
		return new THREE.Mesh(

			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/2_no_clouds_4k.jpg'),
				bumpMap:     THREE.ImageUtils.loadTexture('images/elev_bump_4k.jpg'),
				bumpScale:   0.005,
				specularMap: THREE.ImageUtils.loadTexture('images/water_4k.png'),
				specular:    new THREE.Color('grey')								
			})
			
		); // FUNCTION FOR EARTH SPHARE AND ADDING TEXTURES
	}

	
		function createClouds(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius + 0.003, segments, segments),			
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/fair_clouds_4k.png'),
				transparent: true
			})
		);		
	} // FUNCTION FOR CREATING CLOUDS

		function createStars(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments), 
			new THREE.MeshBasicMaterial({
				map:  THREE.ImageUtils.loadTexture('images/galaxy_starfield.png'), 
				side: THREE.BackSide
			})
		); // FUNCTION FOR CREATING STARS AND BACKGROUND IMG
	}

		// CODE FOR THE SUN -->

		// sun parameters
		var radiusS   = 9,
		segmentsS = 32;

		
		var spheres = createSphereS(radiusS, segmentsS);
		spheres.position.y = 35;
		spheres.position.x = 35;
		spheres.position.z = 0;
	

		
		var pointLight = new THREE.PointLight(0xff5800, 6.0, 100.0);
		spheres.add(pointLight);

		scene.add(spheres) // CREATING SPHERE SUN

		function createSphereS(radiusS, segmentS) {
			return new THREE.Mesh(
	
				new THREE.SphereGeometry(radiusS, segmentsS, segmentsS),
				new THREE.MeshPhongMaterial({
					map:         THREE.ImageUtils.loadTexture('images/sunmap.jpg'),
					emissive: 0xff5800, 
					emissiveIntensity: 0.5
					
				})
				
			); // FUNCTION FOR SUN 
		}

		var spriteMaterial = new THREE.SpriteMaterial(
            {
				map: new THREE.ImageUtils.loadTexture("images/sun.jpg"),
				map: new THREE.ImageUtils.loadTexture("images/glow.png")
                , useScreenCoordinates: false
				, color: 0xff5800				
                , transparent: false
                , blending: THREE.AdditiveBlending
            });
    	var sprite = new THREE.Sprite(spriteMaterial);
    	sprite.scale.set(150, 150, 1.0);
		spheres.add(sprite); // This centers the glow at the sun.

	


		// adding MERCURY
		var radiusM   = 0.25,
		segmentsM = 32;
	
		function CreateSphereM(radiusM, segmentsM) {
		return new THREE.Mesh(

			new THREE.SphereGeometry(radiusM, segmentsM, segmentsM),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/mercurymap.jpg'),
				bumpMap:     THREE.ImageUtils.loadTexture('images/mercurybump.jpg'),
				bumpScale:   0.005,
											
			})
			
			
		); // FUNCTION FOR EARTH SPHARE AND ADDING TEXTURES
	}

		var merc = CreateSphereM(radiusM, segmentsM);
		
		merc.position.y = 35;
		merc.position.x = -13;
		merc.position.z = 0;
		
		
	
		scene.add(merc) // CREATING MERCURY
		

		// CODE FOR VENUS -->

		var radiusV   = 0.45,
		segmentsV = 32;

	function CreateSphereV(radiusV, segmentsV) {
	return new THREE.Mesh(

		new THREE.SphereGeometry(radiusV, segmentsV, segmentsV),
		new THREE.MeshPhongMaterial({
			map:         THREE.ImageUtils.loadTexture('images/venusmap.jpg'),
			bumpMap:     THREE.ImageUtils.loadTexture('images/venusbump.jpg'),
			bumpScale:   0.005,
										
		})
		
	); // FUNCTION FOR VENUS
}

	var ven = CreateSphereV(radiusV, segmentsV);
	ven.position.y = 35;
	ven.position.x = -16;
	ven.position.z = 0;
	scene.add(ven) // CREATING VENUS

	// CODE FOR MARS -->

	var radiusMA   = 0.27,
	segmentsMA = 32;
	
	function CreateSphereMA(radiusMA, segmentsMA) {
		return new THREE.Mesh(
	
			new THREE.SphereGeometry(radiusMA, segmentsMA, segmentsMA),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/marsmap1k.jpg'),
				bumpMap:     THREE.ImageUtils.loadTexture('images/marsbump1k.jpg'),
				bumpScale:   0.005,
											
			})
			
		); // FUNCTION FOR MARS
	}
	
	var mar = CreateSphereMA(radiusMA, segmentsMA);
		mar.position.y = 35;
		mar.position.x = -25;
		mar.position.z = 0;
		scene.add(mar) // CREATING MARS
	
	 // CODE FOR JUPITER -->

	 var radiusJ   = 3.3,
	segmentsJ = 32;

	var orbitRadius = 25; // for example
	var dateJ;

	
	function CreateSphereJ(radiusJ, segmentsJ) {
		return new THREE.Mesh(
	
			new THREE.SphereGeometry(radiusJ, segmentsJ, segmentsJ),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/jupitermap.jpg'),
				
											
			})
			
		); // FUNCTION FOR JUPITER
	}
	
	var jup = CreateSphereJ(radiusJ, segmentsJ);
		jup.position.y = 35;
		jup.position.x = -38;
		jup.position.z = 0;

		
		
		scene.add(jup) // CREATING JUPITER
		
	
		
	
		//CODE FOR SATURN -->

		var radiusSA   = 2.5,
		segmentsSA = 32;
		
		function CreateSphereSA(radiusSA, segmentsSA) {
			return new THREE.Mesh(
		
				new THREE.SphereGeometry(radiusSA, segmentsSA, segmentsSA),
				new THREE.MeshPhongMaterial({
					map:         THREE.ImageUtils.loadTexture('images/saturnmap.jpg'),
					
												
				})
				
			); // FUNCTION FOR SATURN
		}
		
		var sat = CreateSphereSA(radiusSA, segmentsSA);
			sat.position.y = 35;
			sat.position.x = -57;
			sat.position.z = 0;
			scene.add(sat) // CREATING SATURN

			var geometry = new THREE.RingGeometry( 3.5, 6, 32 );
			var material = new THREE.MeshBasicMaterial( { 
			
			side: THREE.DoubleSide ,
			map:         THREE.ImageUtils.loadTexture('images/saturnringcolor.jpg'),
			map:         THREE.ImageUtils.loadTexture('images/saturnringpattern.jpg'),
			
		} );
		
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.set(-57, 35, 0);
		mesh.rotation.x = Math.PI / 2;
		scene.add( mesh ); // SATURN RING
	
	
 		// CODE FOR URANUS -->

 		var radiusU   = 1,
		segmentsU = 32;
		
		function CreateSphereU(radiusU, segmentsU) {
			return new THREE.Mesh(
		
				new THREE.SphereGeometry(radiusU, segmentsU, segmentsU),
				new THREE.MeshPhongMaterial({
					map:         THREE.ImageUtils.loadTexture('images/uranusmap.jpg'),
					
												
				})
				
			); // FUNCTION FOR URANUS
		}
		
		var ura = CreateSphereU(radiusU, segmentsU);
			ura.position.y = 35;
			ura.position.x = -73;
			ura.position.z = 0;
			scene.add(ura) // CREATING URANUS



		// CODE FOR NEPTUNE -->

		var radiusN   = 1,
		segmentsN = 32;
		
		function CreateSphereN(radiusN, segmentsN) {
			return new THREE.Mesh(
		
				new THREE.SphereGeometry(radiusN, segmentsN, segmentsN),
				new THREE.MeshPhongMaterial({
					map:         THREE.ImageUtils.loadTexture('images/neptunemap.jpg'),
					
												
				})
				
			); // FUNCTION FOR NEPTUN
		}
		
		var nep = CreateSphereN(radiusN, segmentsN);
			nep.position.y = 35;
			nep.position.x = -100;
			nep.position.z = 0;
			scene.add(nep) // CREATING NEPTUN








		// CODE FOR PLUTO -->

		var radiusP   = 0.15,
		segmentsP = 32;
		
		function CreateSphereP(radiusP, segmentsP) {
			return new THREE.Mesh(
		
				new THREE.SphereGeometry(radiusP, segmentsP, segmentsP),
				new THREE.MeshPhongMaterial({
					map:         THREE.ImageUtils.loadTexture('images/plutomap1k.jpg'),
					bumpMap:     THREE.ImageUtils.loadTexture('images/plutobump1k.jpg'),
				bumpScale:   0.005,
												
				})
				
			); // FUNCTION FOR PLUTO
		}
		
		var plu = CreateSphereP(radiusP, segmentsP);
			plu.position.y = 35;
			plu.position.x = -127;
			plu.position.z = 0;
			scene.add(plu) // CREATING PLUTO

		//	<------------------------------------------------------------------------------------------------------------------------------------>

		//-------------------------------------------- ROTATION OF THE PLANETS AROUND THE SUN --------------------------------------------------->


		// MERCURE ROTATION AROUND SUN
			
		var orbitM = new THREE.Object3D();
		orbitM.add(merc);
		orbitM.position.x = 35;	
		scene.add(orbitM);


		// VENUS ROTATION AROUND SUN
			
		var orbitV = new THREE.Object3D();
		orbitV.add(ven);
		orbitV.position.x = 35;	
		scene.add(orbitV);

		// EARTH ROTATION AROUND SUN
			
		var orbitE = new THREE.Object3D();
		orbitE.add(sphere);
		orbitE.add(clouds);
		orbitE.position.x = 35;	
		scene.add(orbitE);

		// MARS ROTATION AROUND SUN
			
		var orbitMA = new THREE.Object3D();
		orbitMA.add(mar);		
		orbitMA.position.x = 35;	
		scene.add(orbitMA);



		// JUPITER ROTATION AROUND SUN

		var orbitJ = new THREE.Object3D();
		orbitJ.add(jup);
		orbitJ.position.x = 35;	
		scene.add(orbitJ);


		// SATURN ROTATION AROUND SUN

		var orbitS = new THREE.Object3D();
		orbitS.add(sat);
		orbitS.add(mesh);
		orbitS.position.x = 35;	
		scene.add(orbitS);

		// URANUS ROTATION AROUND SUN

		var orbitU = new THREE.Object3D();
		orbitU.add(ura);	
		orbitU.position.x = 35;	
		scene.add(orbitU);

		// NEPTUNE ROTATION AROUND SUN

		var orbitN = new THREE.Object3D();
		orbitN.add(nep);	
		orbitN.position.x = 35;	
		scene.add(orbitN);

		// PLUTO ROTATION AROUND SUN

		var orbitP = new THREE.Object3D();
		orbitP.add(plu);	
		orbitP.position.x = 35;	
		scene.add(orbitP);

		//	<----------------------------------------------------------------------------------------------------------------------------------->

		//	<---------------------------------------- RENDER FUNCTION AND ALL THE ROTATION OF THE PLANETS -------------------------------------->
	webglEl.appendChild(renderer.domElement);

	render();

	function render() {
		controls.update();
		// planets self rotation
		sphere.rotation.y += 0.0005;
		clouds.rotation.y += 0.0005;
		merc.rotation.y +=  0.00005;
		ven.rotation.y +=  0.00009;
		mar.rotation.y +=  0.00053;
		jup.rotation.y += 0.0011;
		sat.rotation.y += 0.0010;
		ura.rotation.y += 0.00075;
		nep.rotation.y += 0.00067;
		plu.rotation.y += 0.00083;
		
		// planets rotation around sun		
		orbitM.rotation.y += 0.03;
		orbitV.rotation.y += 0.02;
		orbitE.rotation.y += 0.015;
		orbitMA.rotation.y += 0.01;
		orbitJ.rotation.y += 0.008;
		orbitS.rotation.y += 0.004;
		orbitU.rotation.y += 0.0025;
		orbitN.rotation.y += 0.0009;
		orbitP.rotation.y += 0.0004;
		
		requestAnimationFrame(render);
		renderer.render(scene, camera);
		
 
	}  
//	<------------------------------------------------------------------------------------------------------------------------------------------->
		
}());
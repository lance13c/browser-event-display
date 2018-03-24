AFRAME.registerComponent('preview-icon', {
    schema: {
        name: {type: "string", default: "temp"},
        previewImage: {type: "string", 'default': ''},
        obj: {type: "string", default: ''},
        mtl: {type: "string", default: ''},
        collisionObjs: {type: "array", default: []}
    },

    init: function () {
        const ICON_HEIGHT = 0.05;
        const ICON_WIDTH = 0.05;

        // Preview Icons
        this.assetElementsMap = [];

        let previewIconG = new THREE.BoxBufferGeometry(ICON_HEIGHT, 0.01, ICON_WIDTH);
        let previewIconM = new THREE.MeshBasicMaterial({
            color: 0xeeeeee,
            side: 'double'
        });

        let image = this.getImage();
        if (image !== null) {
            previewIconM.map = image;
        }

        this.previewIconMesh = new THREE.Mesh(previewIconG, previewIconM);
        // Aligns Picture Icon in the correct orientation
        this.previewIconMesh.rotateY(Math.PI/2);
        this.el.setObject3D('icon', this.previewIconMesh);

        

        // Check if preview obj is present
        if (this.data.obj !== '' && this.data.mtl !== '') {

            // Create preview Obj
            let previewObj = document.createElement('a-entity');
            previewObj.setAttribute('obj-model', {
                obj: this.data.obj,
                mtl: this.data.mtl
            });

            document.addEventListener('keypress', (e) => {
                previewObj.setAttribute('scale', '0.01 0.01 0.01');
                previewObj.setAttribute('position', '-0.12 0 0');
                previewObj.setAttribute('rotation', '-90 0 90');
                this.el.appendChild(previewObj);
                //previewObj.material.wireframe = true;
                console.log('ICON', this.el); 
            });

            
            
        } else {
            console.warn(`Data obj not found on`, this.el);
        }
        //this.el.setAttribute('position', '-0.2 0.1 0.1');
    

        // Sets aframe extra's sphere collider onto icon
        this.el.setAttribute('class', "preview-icon");
        this.el.setAttribute('aabb-collider', 'objects: .sphere-controller');
        
        this.el.addEventListener('hitstart', function(e) {
            console.log("HIT HAS HAPPENED");
        });

        this.el.addEventListener('hitend', function(e) {
            console.log("HIT END HAS HAPPENED");
        });
    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {},

    getImage() {
        let previewImage = this.data.previewImage;
        if (previewImage !== 'undefined' && previewImage !== undefined) {
            try {
                let image = THREE.ImageUtils.loadTexture(previewImage);
                return image;
            } catch (e) {
                console.error(e);
            }
        }
        return null;
    }
  });
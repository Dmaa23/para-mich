        let nombreUsuario = '';
        const imagenUrl = 'https://raw.githubusercontent.com/jesuxzx/Im-genes-/main/bears-with-kisses-bg.gif';
        const totalShots = 58;
        let shotCount = 0;
        let isShooting = false;
        const heartPieces = [];
        const positions = [
            { x: 0, y: -1.0 }, { x: 0.3, y: -1.2 }, { x: 0.6, y: -1.3 },
            { x: 0.9, y: -1.25 }, { x: 1.2, y: -1.1 }, { x: 1.4, y: -0.9 },
            { x: 1.55, y: -0.6 }, { x: 1.6, y: -0.3 }, { x: 1.55, y: 0.0 },
            { x: 1.4, y: 0.3 }, { x: 1.2, y: 0.55 }, { x: 0.9, y: 0.8 },
            { x: 0.6, y: 1.0 }, { x: 0.3, y: 1.15 }, { x: 0.0, y: 1.3 },
            { x: -0.3, y: 1.15 }, { x: -0.6, y: 1.0 }, { x: -0.9, y: 0.8 },
            { x: -1.2, y: 0.55 }, { x: -1.4, y: 0.3 }, { x: -1.55, y: 0.0 }, { x: -1.6, y: -0.3 },
            { x: -1.55, y: -0.6 }, { x: -1.4, y: -0.9 }, { x: -1.2, y: -1.1 }, { x: -0.9, y: -1.25 },
            { x: -0.6, y: -1.3 }, { x: -0.3, y: -1.2 }, { x: 0, y: -1.0 }
        ];
        const cartaCompleta = `Mi bebe linda 💗
        
Cada día a tu lado, aunque sea lejos, me siento inmensamente feliz. Tu presencia ilumina mi vida de una manera que nunca imaginé. Te amo profundamente, más de lo que las palabras pueden expresar. Eres mi alegría, mi inspiración y mi todo.
        
tus ojos Son los ojos más hermosos que he conocido, llenos de un brillo que me enamora cada vez que los veo, aunque sea a través de una pantalla.
Contando los días para tenerte cerca mi bebe, te amo con todo mi corazón 💗 siempre estaré para ti no importa el dia o la hora❤️

Con todo mi amor, Tu negrito 💗`;
        let indiceCarta = 0;
        const velocidadEscritura = 100;
        const cartaTextoElement = document.getElementById('carta-texto');

        // La función para escribir la carta carácter por carácter
        function escribirCarta() {
            if (indiceCarta < cartaCompleta.length) {
                cartaTextoElement.textContent += cartaCompleta.charAt(indiceCarta);
                indiceCarta++;
                setTimeout(escribirCarta, velocidadEscritura);
            }
        }

        function verificarUsuario() {
            const usuario = document.getElementById('usuarioInput').value.trim().toLowerCase();
            if (usuario !== 'te amo mas'.toLowerCase()) {
                alert("❌ Contraseña incorrecta.");
                return;
            }
            nombreUsuario = 'Mi amor 💗';
            const targetImage = document.getElementById('target-image');
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            targetImage.style.left = `${centerX - 75}px`;
            targetImage.style.top = `${centerY - 100}px`;
            targetImage.style.backgroundImage = `url('img/2.png')`;
            targetImage.style.display = 'block';
            document.getElementById('inputPanel').style.display = 'none';
            document.getElementById('pistol').style.display = 'block';
            document.getElementById('button').style.display = 'block';
        }
        async function startShooting() {
            if (isShooting) return;
            isShooting = true;
            const button = document.getElementById('button');
            button.style.opacity = '0';
            setTimeout(() => { button.style.display = 'none'; }, 500);
            const cabinWindow = document.querySelector('.cabin-window');
            cabinWindow.style.backgroundImage = "url('https://raw.githubusercontent.com/jesuxzx/Im-genes-/14f60f59b9a536e21520bb2bba8b8be1371879bf/dudu-pew-dudu-gun.gif')";
            document.querySelectorAll('.explosion, .message, #new-image').forEach(el => el.remove());
            heartPieces.forEach(el => el.remove());
            heartPieces.length = 0;
            const heartSize = 80;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const cabin = document.querySelector('.cabin');
            shotCount = 0;
            for (let i = 0; i < positions.length; i++) {
                const heartTargetX = centerX + positions[i].x * heartSize;
                const heartTargetY = centerY + positions[i].y * heartSize;
                let emoji = document.createElement('div');
                emoji.classList.add('heart-piece');
                emoji.innerHTML = '❤️';
                emoji.style.left = `${cabin.getBoundingClientRect().right}px`;
                emoji.style.top = `${cabin.getBoundingClientRect().top + cabin.getBoundingClientRect().height / 2}px`;
                document.body.appendChild(emoji);
                emoji.offsetHeight;
                heartPieces.push(emoji);
                emoji.classList.add('visible');
                emoji.style.left = `${heartTargetX}px`;
                emoji.style.top = `${heartTargetY}px`;
                emoji.style.transform = 'scale(1.0)';
                shotCount++;
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
            await shootTarget();
            heartPieces.forEach(el => el.remove());
            heartPieces.length = 0;
            isShooting = false;
        }
        async function shootTarget() {
            const targetImage = document.getElementById('target-image');
            const targetRect = targetImage.getBoundingClientRect();
            const cabin = document.querySelector('.cabin');
            const cabinWindow = document.querySelector('.cabin-window');
            const targetX = targetRect.left + targetRect.width / 2;
            const targetY = targetRect.top + targetRect.height / 2;
            await new Promise(resolve => setTimeout(resolve, 500));
            let firstShot = document.createElement('div');
            firstShot.classList.add('heart-piece');
            firstShot.innerHTML = '❤️';
            firstShot.style.fontSize = '24px';
            firstShot.style.left = `${cabin.getBoundingClientRect().right}px`;
            firstShot.style.top = `${cabin.getBoundingClientRect().top + cabin.getBoundingClientRect().height / 2}px`;
            document.body.appendChild(firstShot);
            firstShot.offsetHeight;
            heartPieces.push(firstShot);
            firstShot.classList.add('visible');
            firstShot.style.left = `${targetX}px`;
            firstShot.style.top = `${targetY}px`;
            firstShot.style.transform = 'scale(1.5)';
            shotCount++;
            await new Promise(resolve => {
                firstShot.addEventListener('transitionend', () => {
                    let flash = document.createElement('div');
                    flash.classList.add('explosion');
                    flash.style.left = `${targetX}px`;
                    flash.style.top = `${targetY}px`;
                    flash.style.animation = 'flashAnim 1s ease-in-out';
                    document.body.appendChild(flash);
                    targetImage.style.opacity = '0';
                    firstShot.style.opacity = '0';
                    flash.addEventListener('animationend', () => {
                        flash.remove();
                        cabin.style.display = 'none';
                        cabinWindow.style.backgroundImage = '';
                        const finalImageElement = document.getElementById('final-image');
                        const cartaElement = document.getElementById('carta-container');
                        if (finalImageElement) {
                            finalImageElement.style.display = 'block';
                            finalImageElement.style.opacity = '1';
                        }
                        if (cartaElement) {
                            cartaElement.style.display = 'block';
                            setTimeout(() => {
                                cartaElement.style.opacity = '1';
                                escribirCarta(); // Aquí se llama la función de escritura gradual
                            }, 100);
                        }
                        resolve();
                    });
                });
            });
   }

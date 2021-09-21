
//variaveis do jogo 

x = 15; y = 130; xx = 15; yy = 130; a = 10; b = 290; x1 = 325; y1 = 150; x2 = -20;
x3 = -20; y2 = -20; y3 = -20; subida = false; descida = true; descida2 = false; subida2 = true; portal = false; vidas = 5; life = false;
fase = 1; plataforma = false; xball = 655; yball = []; estadodisparo = false
dx = 0; dy = 0; pontos = 0; som2 = true; capa = true; game = false; fundo = 0
xball4 = 650; fase3 = 150; xball5 = 550; posicao = 200;
plataforma2 = false; ballx = 150; bally = 300; discox = 550; discoy = 150;
cx = 500; cy = 80; alienx = 500; alieny = 150; ballienx = 520; ballieny = 200;
subida3 = true; descida3 = false; lifea = 300;

//Jogo

function setup() {
    createCanvas(650, 350);
    som.setVolume(1.3);
    som.play(3);

    //Vetor da fase 2

    for (var i = 0; i < 1; i++) {
        yball[i] = random(0, 300)
    }
}

//Imagens utilizadas no jogo

function preload() {
    img = loadImage('562963.png');
    img2 = loadImage("kisspng-asteroid-sprite-clip-art-asteroid-png-photos-5a77e8ecc500b1.8751028515178078528069.png")
    img3 = loadImage("kisspng-roblox-portal-monochrome-photography-black-and-whi-black-hole-5ad7a64c91ae36.9749518715240822525967.png")
    img4 = loadImage("pngkey.com-fighter-jet-png-4837106.png")
    img5 = loadImage("b92e55170bed0673f5b0d8f041d17488.png")
    img6 = loadImage("gasolina.png")
    img7 = loadImage("space.jpg")
    img8 = loadImage("buraco negro.jpg")
    img9 = loadImage("ga e.jpg")
    img10 = loadImage("estrelas2.png")
    img11 = loadImage("meteoro de fogo.png")
    img12 = loadImage("portal 2.png")
    img13 = loadImage("lua.jpg")
    img14 = loadImage("estrela.png")
    discovoador = loadImage("Disco voador.png")
    coracao = loadImage("Coração.png")
    fundo5 = loadImage("fundo 5.jpg")
    alien = loadImage("alien.png")
    life = 150

    //Sons

    soundFormats('mp3');
    mySound = loadSound('cartoon_tiro.mp3');
    gameover = loadSound('gameover_efeito_sonoro_toquesengracadosmp3.com.mp3')
    som = loadSound("Zelda.mp3")

}

function draw() {
    background('#E0FFFF')

    //Imagem de Fundo

    image(img, 0, 0, 650, 350)

    //Contornos

    strokeWeight(1)
    stroke(51)


    //Colisão nos Objetos (Etapa 4)

    if (dist(x + 10, y + 10, 100, b) <= 10 + 10) {
        x = 15
        y = 130
        life = true
    }
    if (dist(x + 10, y + 10, 150, a) <= 10 + 10) {
        x = 15
        y = 130
        life = true
    }
    if (dist(x + 10, y + 10, 200, b) <= 10 + 10) {
        x = 15
        y = 130
        life = true
    }
    if (dist(x + 10, y + 10, 250, a) <= 10 + 10) {
        x = 15
        y = 130
        life = true
    }
    if (dist(x + 10, y + 10, 300, b) <= 10 + 10) {
        x = 15
        y = 130
        life = true
    }
    if (dist(x + 10, y + 10, 350, a) <= 10 + 10) {
        x = 15
        y = 130
        life = true
    }
    if (dist(x + 10, y + 10, 400, b) <= 10 + 10) {
        x = 15
        y = 130
        life = true
    }
    if (dist(x + 10, y + 10, 450, a) <= 10 + 10) {
        x = 15
        y = 130
        life = true
    }
    if (dist(x + 10, y + 10, 500, b) <= 10 + 10) {
        x = 15
        y = 130
        life = true
    }

    //Redução de vida

    if (life == true) {
        vidas = vidas - 1
    }
    if (x == x && y == y) {
        life = false
    }

    //Nave

    image(img4, x, y, 40, 40)

    //Movimentação da nave(Etapa 2)

    if (keyIsDown(UP_ARROW)) {
        y = y - 3
    }
    if (keyIsDown(DOWN_ARROW)) {
        y = y + 3
    }
    if (keyIsDown(LEFT_ARROW)) {
        x = x - 3
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x = x + 3
    }

    //Colisão com as paredes (Etapa 6)

    if (x < 0) {
        x = 0
    }
    if (x > 629) {
        x = 629
    }
    if (y < 0) {
        y = 0
    }
    if (y > 260) {
        y = 260
    }
    if (fase == 1) {

        //Meteoros

        image(img2, 150, a, 20, 20);
        image(img2, 250, a, 20, 20)
        image(img2, 350, a, 20, 20)
        image(img2, 450, a, 20, 20)

        if (a == 10) {
            descida = true
        }
        if (descida == true) {
            a += 5
        }
        if (a == 290) {
            descida = false

        }
        if (a == 290) {
            subida = true
        }
        if (subida == true) {
            a -= 5
        }
        if (a == 10) {
            subida = false
        }


        //Meteoros

        image(img2, 100, b, 20, 20)
        image(img2, 200, b, 20, 20)
        image(img2, 300, b, 20, 20)
        image(img2, 400, b, 20, 20)
        image(img2, 500, b, 20, 20)

        //Movimentação dos meteoros

        if (b == 290) {
            subida2 = true
        }
        if (subida2 == true) {
            b -= 5
        }
        if (b == 10) {
            subida2 = false

        }
        if (b == 10) {
            descida2 = true
        }
        if (descida2 == true) {
            b += 5
        }
        if (b == 290) {
            descida2 = false
        }

        //Objetos

        image(img14, x1, y1, 20, 20)
        image(img14, x2, y2, 20, 20)
        image(img14, x3, y3, 20, 20)

        // Condição para Mudança de fase(Etapa 9)

        if (dist(x + 10, y + 10, x1, y1) < 10 + 5 && fase == 1) {
            x1 = -20
            y1 = -20
            pontos = pontos + 10
        }

        //Portal (Nível 1)

        if (x1 == -20 && y1 == -20) {
            image(img3, 575, 80, 80, 180)
            plataforma = true

        }
        if (plataforma == true) {
            image(img3, 575, 80, 80, 180)
        }


        //Mudança de fase

        if (dist(x + 10, y + 10, 580, 125) <= 10 + 50 && plataforma == true) {

            x = 15
            y = 130
            fase = fase + 1
            x1 = 325
            y1 = 150
            x2 = 425
            y2 = 150
            x3 = 225
            y3 = 150

        }

        //Condições para o game over

        if (vidas < 0) {
            x = 325
            y = 0
        }
    }

    //FASE 2
    if (fase == 2) {

        //variaveis da fase 2

        a = b - 10
        b = b - 10
        x3 = 150
        y3 = 120

        //Fundo(Fase 2)

        image(img7, 0, 0, 650, 350)
        fill('#8B2323')
        image(img4, x, y, 40, 40)

        //Colisão

        if (dist(x, y, x2, y2) <= 20) {
            x2 = -20
            y2 = -20
            pontos = pontos + 20
        }

        //Ganho de pontos ao destruir meteoros(Etapa 6)

        image(img6, x1 - 50, y1 + 50, 20, 20)
        if (dist(x + 10, y + 10, x1 - 50, y1 + 50) <= 20) {
            x1 = -20
            y1 = -20
            pontos = pontos + 15
        }
        //Objetos de coleta

        image(img14, x2, y2, 20, 20)
        if (dist(x + 10, y + 10, x2, y2) <= 20) {
            x2 = -20
            y2 = -20
            pontos = pontos + 15
        }
        //Portal fase 2

        if (x1 == -20 && y1 == -20 && x2 == -20 && y2 == -20) {

            image(img3, 575, 80, 80, 180)
            plataforma = true
        }

        //disparo da nave;

        if (keyIsDown(CONTROL) && estadodisparo == false) {
            estadodisparo = true
            dx = x
            dy = y

            mySound.setVolume(5.10);
            mySound.play();
        }
        if (estadodisparo === true) {
            fill(220)
            stroke(220, 0, 0)
            ellipse(dx + 50, dy + 20, 6, 6)
            dx = dx + 10

            if (dx > width)
                estadodisparo = false
        }

        //disparos
        for (var i = 0; i < 1; i++) {
            fill(255, 165, 0)
            image(img2, xball, yball[i], 20, 20)
            xball = xball - random(6, 10)


            if (xball < 0) {
                xball = 650
                yball[i] = random(0, 300)
            }
            yb = yball[i]
        }
        if (dist(x, y, xball, yb) < 25) {
            x = 15
            y = 130
            vidas = vidas - 1
        }
        if (dist(dx, dy, xball, yb) < 10 + 5) {
            dx = x
            dy = y
            estadodisparo = false
            xball = -10
            pontos = pontos + 10
        }

        if (dist(x + 10, y + 10, 580, 125) <= 10 + 50 && plataforma == true) {
            fase = fase + 1
            x = 15
            y = 130
        }
    }

    //fase 3

    //variaveis fase 3
    xball6 = 650
    posicao2 = 70

    if (fase == 3) {
        image(img8, 0, 0, 650, 350)
        image(img4, x, y, 40, 40)

        //Disparos

        if (keyIsDown(CONTROL) && estadodisparo == false) {
            estadodisparo = true
            dx = x
            dy = y
            mySound.setVolume(5.10);
            mySound.play();
        }
        if (estadodisparo === true) {
            fill(220)
            stroke(220, 0, 0)
            ellipse(dx + 50, dy + 20, 6, 6)
            dx = dx + 10

            if (dx > width)
                estadodisparo = false
        }
        image(img2, xball4, fase3, 30, 30)
        xball4 = xball4 - 5

        if (xball4 < 0) {
            xball4 = 655
            fase3 = random(0, 300)
        }
        if (dist(x, y, xball4, fase3) < 30) {
            x = 15
            y = 130
            vidas = vidas - 1
            xball4 = 650

        }
        if (dist(dx, dy, xball4, fase3) < 10 + 5) {
            dx = x
            dy = y
            estadodisparo = false
            xball4 = 900
            pontos = pontos + 25
        }
        //Velocidade dos meteoros

        image(img2, xball5, posicao, 30, 30)
        xball5 = xball5 - random(5, 10)

        if (xball5 < 0) {
            xball5 = 655
            posicao = random(0, 300)
        }
        // Perca de vida ao colidir com os meteoros

        if (dist(x, y, xball5, posicao) < 30) {
            x = 15
            y = 130
            vidas = vidas - 1
            xball5 = 650
            posicao = random(0, 300)
        }
        //Ganho de pontos

        if (dist(dx, dy, xball5, posicao) < 10 + 5) {
            dx = x
            dy = y
            estadodisparo = false
            xball5 = 900
            pontos = pontos + 25
            posicao = random(0, 300)
        }

        //Meteoros

        image(img2, xball6, posicao2, 30, 30)
        xball6 = xball6 - random(5, 10)

        //Repetição aleatoria dos meteoros

        if (xball6 < 0) {
            xball6 = random(0, 655)
            posicao2 = random(0, 300)
        }
        //Perca de vida

        if (dist(x, y, xball5, posicao) < 30) {
            x = 15
            y = 130
            vidas = vidas - 1
            xball5 = 650
            posicao = random(0, 300)

        }
        //Ganho de pontos

        if (dist(dx, dy, xball6, posicao2) < 10 + 5) {
            dx = x
            dy = y
            estadodisparo = false
            xball6 = 900
            pontos = pontos + 25
            posicao2 = random(0, 300)
        }
        //Mudança de fase

        if (pontos > 250 && fase === 3) {
            image(img12, 575, 80, 80, 180)
            plataforma2 = true
        }
        if (dist(x, y, 575, 80) < 10 + 50) {
            plataforma2 = false
        }

        if (dist(x + 10, y + 10, 580, 125) <= 10 + 50 && plataforma2 == true) {
            fase = fase + 1
            x = 15
            y = 130
        }
    }

    //Fase 4

    if (fase === 4) {

        //Fundo

        image(img13, 0, 0, 650, 300)
        image(img4, x, y, 40, 40)

        //Disparos da nave

        if (keyIsDown(CONTROL) && estadodisparo == false) {
            estadodisparo = true
            dx = x
            dy = y
            mySound.setVolume(5.10);
            mySound.play();
        }
        if (estadodisparo === true) {
            fill(220)
            stroke(220, 0, 0)
            ellipse(dx + 50, dy + 20, 6, 6)
            dx = dx + 15

            if (dx > width)
                estadodisparo = false
        }

        //Meteoros na vertical

        image(img2, ballx, bally, 50, 50)
        bally = bally - 5

        //Repetição aleatoria dos meteoros

        if (bally < -25) {
            bally = 350
            ballx = random(0, 600)
            bally = bally - random(5, 12)
        }
        if (dist(dx, dy, ballx, bally) < 30) {
            ballx = random(0, 300)
            bally = 350
            estadodisparo = true
        }

        //Colisão com meteoro na vertical

        if (dist(x, y, ballx, bally) < 30) {
            x = 15
            y = 150
            vidas = vidas - 1
            bally = 350
        }

        //Aparições do disco voador

        image(discovoador, discox, discoy, 50, 30)
        discox = discox - 5
        if (discox < -50) {
            discox = 700
            discoy = random(0, 300)
        }

        //Perca de vida ao colidir com o disco voador

        if (dist(x, y, discox, discoy) < 50) {
            discox = 670
            vidas = vidas - 1
            x = 15
            y = 150
        }

        image(img12, 575, 80, 80, 180)

        if (dist(x, y, 575, 80) < 10 + 50) {
            fase = fase + 1
            plataforma2 = false
            x = 15
            y = 150
        }

        //Aparição de vidas

        image(coracao, cx, cy, 30, 30)

        //Ganho de vidas

        if (dist(x, y, cx, cy) < 15 + 30) {
            cx = -300
            cy = -400
            vidas = vidas + 2
        }

    }

    //fase 5

    if (fase == 5) {
        plataforma2 = false
        image(fundo5, 0, 0, 675, 500)
        image(img4, x, y, 40, 40)
        image(alien, alienx, alieny, 150, 120)

        //Subida e descida do desafio final

        if (subida3 == true) {
            alieny = alieny - 3
        }
        if (alieny < -20) {
            subida3 = false
            descida3 = true
        }
        if (descida3 == true) {
            alieny = alieny + 2
        }
        if (alieny > 280) {
            descida3 = false
            subida3 = true
        }
        //Disparos do desafio final
        fill(255, 165, 0)
        ellipse(ballienx, ballieny, 10, 10)
        fill(255, 0, 0)
        rect(5, 10, lifea, 10)
        ballieny = alieny + 50
        ballienx -= 5

        // Disparos

        if (keyIsDown(CONTROL) && estadodisparo == false) {
            estadodisparo = true
            dx = x
            dy = y
            mySound.setVolume(5.10);
            mySound.play();
        }

        //Redução de vida do desafio final

        if (dist(x, y, ballienx, ballieny) < 5 + 20) {
            vidas = vidas - 1
            ballienx = alienx
            ballieny = alieny
            x = 15
            y = 130
        }

        //Condição de disparo

        if (estadodisparo === true) {
            fill(220)
            stroke(220, 0, 0)
            ellipse(dx + 50, dy + 20, 6, 6)
            dx = dx + 15
        }

        //Retomada dos disparos

        if (dist(dx, dy, alienx, alieny) < 4 + 50) {
            estadodisparo = false
            dx = x
            dy = y
            lifea -= 12
            pontos = pontos + 10

        }
        if (dx > width) {
            estadodisparo = false
        }

        //Morte do desafio final

        if (lifea <= 0) {
            alienx = alienx - 5
            alieny = 150
            plataforma2 = true
            ballienx = 3000
            ballieny = 3000
        }

        //Abertura portal

        if (plataforma2 == true) {
            image(img12, 575, 50, 80, 280)
        }

        //Mudança de fase
        if (dist(x, y, 575, 80) < 60 + 20) {
            fase = 6
            plataforma2 = false

        }
        //Disparo 
        if (dist(dx, dy, alienx, alieny) < 4 + 40) {
            lifea = lifea - 3
            estadodisparo = false
        }

        //Aumento da dificuldade

        if (lifea < 150) {
            ballienx -= 7
            image(coracao, cx - 350, cy, 20, 20)

            //Pegar vida

            if (dist(x, y, cx - 350, cy) < 10 + 20) {
                vidas = vidas + 3
                cx = -1000
                cy = -300
            }
        }
        if (ballienx < 0) {
            ballienx = 500
        }

    }

    //Comando de pressionar qualquer tecla para iniciar o jogo

    if (key) {
        capa = false
        game = true
        som2 = false
    }

    //Plataforma de vidas e níveis

    fill(0)
    rect(0, 300, 650, 50)
    fill(300)
    textSize(18)
    text('VIDAS : ' + vidas, 10, 330)
    image(coracao, 95, 314, 20, 20)
    text('NÍVEL: ' + fase, 500, 330)
    text("PONTOS: " + pontos, 250, 330)

    //Game over

    if (vidas < 0) {
        x = x
        y = y
        estadodisparo = true
        fill(0)
        image(img9, 0, 0, 650, 340)
    }

    //Termino do jogo

    if (fase === 6) {

        //Fundos
        capa = false
        som.setVolume(1.3)
        image(img, 0, 0, 650, 350)
        image(img4, xx - 450, yy - 175, 400, 400)
        plataforma2 = false
        //Variaveis de posição

        x = xx
        xx = xx + 3

        //Escrita do texto de termino do jogo

        if (x > 550) {
            textSize(90)
            text("F", 150, 200)
        }
        if (x > 750) {
            textSize(90)
            text("I", 210, 200)
        }
        if (x > 850) {
            textSize(90)
            text("N", 240, 200)
        }
        if (x > 950) {
            textSize(90)
            text("I", 310, 200)
        }
        if (x > 1050) {
            textSize(90)
            text("S", 340, 200)
        }
        if (x > 1150) {
            textSize(90)
            text("H", 410, 200)
        }

    }

    //Capa do jogo

    if (capa == true && game == false) {
        fill(0)
        image(img10, fundo, 0, 650, 350)
        image(img4, fundo - 70, 0 - 25, 400, 400)
        textSize(70)
        fill(220)
        text("SPACE", fundo + 400, 70)
        text("FIGTHER", fundo + 330, 150)
        textSize(20)
        fill(150)
        text("Pressione qualquer tecla para jogar", 300, 290)
    }

}

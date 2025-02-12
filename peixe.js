const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload() {
    console.log("✅ preload() foi chamado!"); // Teste para ver se preload está rodando
    this.load.image('mar', 'https://diegofsiilva.github.io/m1_peixinho/assets/bg_azul-claro.png');
}

function create() {
    console.log("✅ create() foi chamado!"); // Teste para ver se create está rodando
    this.add.image(400, 300, 'mar');


    this.add.image(400, 525, 'logo').setScale(0.5);
    this.add.image(700,500, 'bau').setScale(0.2)
    peixinho = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5).setFlip(true, false);
}
function update(){
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

}
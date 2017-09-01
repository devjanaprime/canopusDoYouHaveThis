var inventory =[];

$( document ).ready( readyNow );

function readyNow(){
    console.log( 'JQ' );
}  // end readyow

// item object constructor
function Item( sizeIn, colorIn, nameIn){
    this.size = sizeIn;
    this.color = colorIn;
    this.name = nameIn;
    // once created add to inventory
    inventory.push( this );
} // end item constructor

new Item( 'tiny', 'purple', 'vial of glitter' );
new Item( 'small', 'purple', 'cup of glitter' );
new Item( 'medium', 'purple', 'bucket of glitter' );
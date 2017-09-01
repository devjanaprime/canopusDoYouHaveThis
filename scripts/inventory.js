var inventory =[];

$( document ).ready( readyNow );

function readyNow(){
    console.log( 'JQ' );
    $( '#addItemButton' ).on( 'click', addItem );
}  // end readyNow

function addItem(){
    // get user input
    // use input to create item
    new Item( $( '#sizeIn' ).val(), $( '#colorIn' ).val(), $( '#nameIn' ).val() )
    // push item into array (done in constructor)
    // reset inputs
    $( '#nameIn' ).val('');
    $( '#sizeIn' ).val('Tiny');
    $( '#colorIn' ).val('Red');
} //end clickyTest

// item object constructor
function Item( sizeIn, colorIn, nameIn ){
    this.size = sizeIn;
    this.color = colorIn;
    this.name = nameIn;
    // once created add to inventory
    inventory.push( this );
} // end item constructor
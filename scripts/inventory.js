var inventory =[];

$( document ).ready( ()=>{
        $( '#addItemButton' ).on( 'click', addItem );
        $( '#searchButton' ).on( 'click', searchNow );
    }
);

var addItem = () =>{
    // get user input
    // use input to create item
    new Item( $( '#sizeIn' ).val(), $( '#colorIn' ).val(), $( '#nameIn' ).val() )
    // push item into array (done in constructor)
    // reset inputs
    $( '#nameIn' ).val( '' );
    $( '#sizeIn' ).val( 'Tiny' );
    $( '#colorIn' ).val( 'Red' );
} //end clickyTest

// item object constructor
class Item {
    constructor( sizeIn, colorIn, nameIn ){
    this.size = sizeIn;
    this.color = colorIn;
    this.name = nameIn;
    // once created add to inventory
    inventory.push( this );
    } // end item constructor
}

var searchNow = () =>{
    // get user input
    var sizeSearch = $( '#sizeSearchIn' ).val();
    var colorSearch = $( '#colorSearchIn' ).val();
    var matches = [];
    // loop through inventory array
    for( var i=0; i < inventory.length; i++ ){
        // for each item check if both size and color match (compound conditional)
        if( inventory[ i ].size === sizeSearch && inventory[ i ].color === colorSearch ){ 
            // if match, push into matches array
            matches.push( inventory[ i ] );
        } // end match
    } // end for
    // return matches array
    console.log( 'matches:', matches );
    return matches;
} // end searchNow
let inventory =[];

$( document ).ready( ()=>{
        $( '#addItemButton' ).on( 'click', addItem );
        $( '#searchButton' ).on( 'click', searchNow );
    }
);

// item object constructor
class Item {
    constructor( sizeIn, colorIn, nameIn ){
    this.size = sizeIn;
    this.color = colorIn;
    this.name = nameIn;
    // once created add to inventory
    } // end item constructor
}

let addItem = () =>{
    // get user input
    // use input to create item
    let newItem = new Item( $( '#sizeIn' ).val(), $( '#colorIn' ).val(), $( '#nameIn' ).val() );
    // push item into array
    inventory.push( newItem );
    // reset inputs
    $( '#nameIn' ).val( '' );
    $( '#sizeIn' ).val( 'Tiny' );
    $( '#colorIn' ).val( 'Red' );
    // run search to update output in case we added a match
    searchNow();
} //end clickyTest

let searchNow = () =>{
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
    showItems( matches );
} // end searchNow

let showItems = ( matches ) =>{
    // display search parameters
    let searchParameters = $( '#searchParameters' );
    searchParameters.empty();
    searchParameters.append( $( '#sizeSearchIn' ).val() + ' & ' + $( '#colorSearchIn' ).val() );
    // output list
    itemsList = $( '#itemsList' );
    itemsList.empty();
    // check for no matches
    if( matches.length === 0 ){
        itemsList.append( '<li>no matches</li>' );
    } //end no matches
    else{
        // loop through array and append each item to DOM
        for( let i=0; i< matches.length; i++ ){
            let outputString = '<li>' + matches[ i ].name +'</li>';
            itemsList.append( outputString );
        } // end for
    } // end matches
    
} // end showItems
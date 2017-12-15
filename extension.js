// Copyright (C) 2011-2013 R M Yorston
// Licence: GPLv2+

const Main = imports.ui.main;
const SessionMode = imports.ui.sessionMode;

function init() {
}

function enable() {
    // do nothing if the clock isn't centred in this mode
    if ( Main.sessionMode.panel.center.indexOf('dateMenu') == -1 ) {
        return;
    }

    let centerBox = Main.panel._centerBox;
    let rightBox  = Main.panel._rightBox;
    let leftBox   = Main.panel._leftBox;
    let dateMenu  = Main.panel.statusArea['dateMenu'];
    let children  = centerBox.get_children();

    // only move the clock if it's in the centre box
    if ( children.indexOf(dateMenu.container) != -1 ) {
        centerBox.remove_actor(dateMenu.container);

        children = leftBox.get_children();
        leftBox.insert_child_at_index(dateMenu.container, children.length-1);
        leftBox.remove_actor(children[0]); // Remove Activities Menu
   }
}

function disable() {
    // do nothing if the clock isn't centred in this mode
    if ( Main.sessionMode.panel.center.indexOf('dateMenu') == -1 ) {
        return;
    }

    let centerBox = Main.panel._centerBox;
    let rightBox = Main.panel._rightBox;
    let leftBox   = Main.panel._leftBox;
    let dateMenu = Main.panel.statusArea['dateMenu'];
    let children = leftBox.get_children();

    // only move the clock back if it's in the right box
    if ( children.indexOf(dateMenu.container) != -1 ) {
        leftBox.remove_actor(dateMenu.container);
        centerBox.add_actor(dateMenu.container);
    }
}

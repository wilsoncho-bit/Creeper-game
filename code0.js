gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects1_1final = [];

gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects1_1final = [];

gdjs.Game_32SceneCode.GDObstacleObjects1_1final = [];

gdjs.Game_32SceneCode.GDcreeperObjects1_1final = [];

gdjs.Game_32SceneCode.GDGroundObjects1= [];
gdjs.Game_32SceneCode.GDGroundObjects2= [];
gdjs.Game_32SceneCode.GDGroundObjects3= [];
gdjs.Game_32SceneCode.GDObstacleObjects1= [];
gdjs.Game_32SceneCode.GDObstacleObjects2= [];
gdjs.Game_32SceneCode.GDObstacleObjects3= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects1= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects2= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects3= [];
gdjs.Game_32SceneCode.GDMovementJoystickObjects1= [];
gdjs.Game_32SceneCode.GDMovementJoystickObjects2= [];
gdjs.Game_32SceneCode.GDMovementJoystickObjects3= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects1= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects2= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects3= [];
gdjs.Game_32SceneCode.GDControlsToggleObjects1= [];
gdjs.Game_32SceneCode.GDControlsToggleObjects2= [];
gdjs.Game_32SceneCode.GDControlsToggleObjects3= [];
gdjs.Game_32SceneCode.GDcreeperObjects1= [];
gdjs.Game_32SceneCode.GDcreeperObjects2= [];
gdjs.Game_32SceneCode.GDcreeperObjects3= [];
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects1= [];
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects2= [];
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects3= [];
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects3= [];
gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects1= [];
gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects2= [];
gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects3= [];


gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32SceneCode.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.Game_32SceneCode.GDMovementJoystickObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDMovementJoystickObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDMovementJoystickObjects1[i].ActivateControl(false, null);
}
}
}

}


};gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDControlsToggleObjects1, gdjs.Game_32SceneCode.GDControlsToggleObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDControlsToggleObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDControlsToggleObjects2[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDControlsToggleObjects2[k] = gdjs.Game_32SceneCode.GDControlsToggleObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDControlsToggleObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32SceneCode.GDJumpButtonObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Touch");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects2[i].activateBehavior("MultitouchButton", true);
}
}
}

}


{

/* Reuse gdjs.Game_32SceneCode.GDControlsToggleObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDControlsToggleObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDControlsToggleObjects1[i].IsChecked(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDControlsToggleObjects1[k] = gdjs.Game_32SceneCode.GDControlsToggleObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDControlsToggleObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32SceneCode.GDJumpButtonObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Keyboard");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects1[i].activateBehavior("MultitouchButton", false);
}
}
}

}


};gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.Game_32SceneCode.GDControlsToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDControlsToggleObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDControlsToggleObjects1[i].HasJustBeenToggled(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDControlsToggleObjects1[k] = gdjs.Game_32SceneCode.GDControlsToggleObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDControlsToggleObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDControlsToggleObjects1Objects = Hashtable.newFrom({"ControlsToggle": gdjs.Game_32SceneCode.GDControlsToggleObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDMovementJoystickObjects2Objects = Hashtable.newFrom({"MovementJoystick": gdjs.Game_32SceneCode.GDMovementJoystickObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDMovementJoystickObjects1Objects = Hashtable.newFrom({"MovementJoystick": gdjs.Game_32SceneCode.GDMovementJoystickObjects1});
gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32SceneCode.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.Game_32SceneCode.GDMovementJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDMovementJoystickObjects1Objects, "Left", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDJumpButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDJumpButtonObjects1[i].getBehavior("MultitouchButton").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDJumpButtonObjects1[k] = gdjs.Game_32SceneCode.GDJumpButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, null);
}
}

}


};gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.Game_32SceneCode.GDMovementJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDMovementJoystickObjects2Objects, "Left", null);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDMovementJoystickObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDMovementJoystickObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDMovementJoystickObjects2[i].TeleportAndPress(null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12035700);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.Game_32SceneCode.GDControlsToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Touch");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDControlsToggleObjects1Objects, runtimeScene, true, true);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDControlsToggleObjects1Objects = Hashtable.newFrom({"ControlsToggle": gdjs.Game_32SceneCode.GDControlsToggleObjects1});
gdjs.Game_32SceneCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.Game_32SceneCode.GDControlsToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Keyboard");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDControlsToggleObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, null));
}
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, null);
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcreeperObjects2Objects = Hashtable.newFrom({"creeper": gdjs.Game_32SceneCode.GDcreeperObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDarkWoodPlancksBlockObjects2Objects = Hashtable.newFrom({"DarkWoodPlancksBlock": gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcreeperObjects2Objects = Hashtable.newFrom({"creeper": gdjs.Game_32SceneCode.GDcreeperObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDObstacleObjects2Objects = Hashtable.newFrom({"Obstacle": gdjs.Game_32SceneCode.GDObstacleObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcreeperObjects2Objects = Hashtable.newFrom({"creeper": gdjs.Game_32SceneCode.GDcreeperObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemy_95959595Large_95959595GunObjects2Objects = Hashtable.newFrom({"Enemy_Large_Gun": gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects2});
gdjs.Game_32SceneCode.asyncCallback14587804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("creeper"), gdjs.Game_32SceneCode.GDcreeperObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDcreeperObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcreeperObjects2[i].getBehavior("Object3D").setZ(gdjs.Game_32SceneCode.GDcreeperObjects2[i].getBehavior("Object3D").getZ() + (7));
}
}
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(14587804, gdjs.Game_32SceneCode.asyncCallback14587804);
gdjs.Game_32SceneCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
for (const obj of gdjs.Game_32SceneCode.GDcreeperObjects1) asyncObjectsList.addObject("creeper", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback14587804(runtimeScene, asyncObjectsList)), 14587804, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].setX(0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].setY(0);
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_32SceneCode.eventsList2(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList5(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList6(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("creeper"), gdjs.Game_32SceneCode.GDcreeperObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcreeperObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcreeperObjects1[i].rotateTowardObject((gdjs.Game_32SceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Game_32SceneCode.GDPlayerObjects1[0] : null), 0, runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcreeperObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcreeperObjects1[i].addForceTowardObject((gdjs.Game_32SceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Game_32SceneCode.GDPlayerObjects1[0] : null), 150, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Object3D").getCenterZInScene() < -50 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Object3D").setZ(50);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].setY(200);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].setX(200);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("creeper"), gdjs.Game_32SceneCode.GDcreeperObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDcreeperObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDcreeperObjects1[i].getBehavior("Object3D").getCenterZInScene() < -50 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDcreeperObjects1[k] = gdjs.Game_32SceneCode.GDcreeperObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDcreeperObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDcreeperObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcreeperObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcreeperObjects1[i].setX(200);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcreeperObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcreeperObjects1[i].setY(200);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcreeperObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcreeperObjects1[i].getBehavior("Object3D").setZ(50);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("creeper"), gdjs.Game_32SceneCode.GDcreeperObjects1);
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects1.length = 0;

gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects1.length = 0;

gdjs.Game_32SceneCode.GDObstacleObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDcreeperObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDcreeperObjects1[i].getBehavior("Object3D").getCenterZInScene() < (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getBehavior("Object3D").getCenterZInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDcreeperObjects1[k] = gdjs.Game_32SceneCode.GDcreeperObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDcreeperObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects1_1final.length = 0;
gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects1_1final.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects1_1final.length = 0;
gdjs.Game_32SceneCode.GDcreeperObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DarkWoodPlancksBlock"), gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects2);
gdjs.copyArray(gdjs.Game_32SceneCode.GDcreeperObjects1, gdjs.Game_32SceneCode.GDcreeperObjects2);

isConditionTrue_1 = gdjs.physics3d.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcreeperObjects2Objects, "Physics3D", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDarkWoodPlancksBlockObjects2Objects, "Physics3D", false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects1_1final.push(gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDcreeperObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDcreeperObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDcreeperObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDcreeperObjects1_1final.push(gdjs.Game_32SceneCode.GDcreeperObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Game_32SceneCode.GDObstacleObjects2);
gdjs.copyArray(gdjs.Game_32SceneCode.GDcreeperObjects1, gdjs.Game_32SceneCode.GDcreeperObjects2);

isConditionTrue_1 = gdjs.physics3d.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcreeperObjects2Objects, "Physics3D", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDObstacleObjects2Objects, "Physics3D", false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDObstacleObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDObstacleObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDObstacleObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDObstacleObjects1_1final.push(gdjs.Game_32SceneCode.GDObstacleObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDcreeperObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDcreeperObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDcreeperObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDcreeperObjects1_1final.push(gdjs.Game_32SceneCode.GDcreeperObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Enemy_Large_Gun"), gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects2);
gdjs.copyArray(gdjs.Game_32SceneCode.GDcreeperObjects1, gdjs.Game_32SceneCode.GDcreeperObjects2);

isConditionTrue_1 = gdjs.physics3d.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcreeperObjects2Objects, "Physics3D", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemy_95959595Large_95959595GunObjects2Objects, "Physics3D", false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects1_1final.push(gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDcreeperObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDcreeperObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDcreeperObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDcreeperObjects1_1final.push(gdjs.Game_32SceneCode.GDcreeperObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects1_1final, gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects1);
gdjs.copyArray(gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects1_1final, gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects1);
gdjs.copyArray(gdjs.Game_32SceneCode.GDObstacleObjects1_1final, gdjs.Game_32SceneCode.GDObstacleObjects1);
gdjs.copyArray(gdjs.Game_32SceneCode.GDcreeperObjects1_1final, gdjs.Game_32SceneCode.GDcreeperObjects1);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects1.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects2.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects3.length = 0;
gdjs.Game_32SceneCode.GDcreeperObjects1.length = 0;
gdjs.Game_32SceneCode.GDcreeperObjects2.length = 0;
gdjs.Game_32SceneCode.GDcreeperObjects3.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects1.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects2.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects3.length = 0;

gdjs.Game_32SceneCode.eventsList8(runtimeScene);
gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects1.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects2.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects3.length = 0;
gdjs.Game_32SceneCode.GDcreeperObjects1.length = 0;
gdjs.Game_32SceneCode.GDcreeperObjects2.length = 0;
gdjs.Game_32SceneCode.GDcreeperObjects3.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects1.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects2.length = 0;
gdjs.Game_32SceneCode.GDDarkWoodPlancksBlockObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemy_9595Large_9595GunObjects3.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;

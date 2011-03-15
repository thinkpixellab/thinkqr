// This file was autogenerated by calcdeps.py
goog.addDependency("../../../../js/Application.js", ['Application'], ['QRCode']);
goog.addDependency("../../../../js/deps.js", [], []);
goog.addDependency("../../../../js/qr/QR8bitByte.js", ['QR8bitByte'], []);
goog.addDependency("../../../../js/qr/QRBitBuffer.js", ['QRBitBuffer'], []);
goog.addDependency("../../../../js/qr/QRCode.js", ['QRCode'], ['QR8bitByte', 'QRMode', 'QRUtil', 'QRRSBlock', 'QRBitBuffer']);
goog.addDependency("../../../../js/qr/QREnums.js", ['QRMode', 'QRErrorCorrectLevel', 'QRMaskPattern'], []);
goog.addDependency("../../../../js/qr/QRMath.js", ['QRMath'], []);
goog.addDependency("../../../../js/qr/QRPolynomial.js", ['QRPolynomial'], []);
goog.addDependency("../../../../js/qr/QRRSBlock.js", ['QRRSBlock'], []);
goog.addDependency("../../../../js/qr/QRUtil.js", ['QRUtil'], ['QRPolynomial', 'QRMath']);
goog.addDependency("../../../box2d/collision/b2AABB.js", ['box2d.AABB'], ['box2d.Vec2']);
goog.addDependency("../../../box2d/collision/b2Bound.js", ['box2d.Bound'], []);
goog.addDependency("../../../box2d/collision/b2BoundValues.js", ['box2d.BoundValues'], []);
goog.addDependency("../../../box2d/collision/b2BroadPhase.js", ['box2d.BroadPhase'], ['box2d.Bound', 'box2d.BoundValues', 'box2d.PairManager', 'box2d.Proxy', 'box2d.Settings', 'box2d.Vec2']);
goog.addDependency("../../../box2d/collision/b2BufferedPair.js", ['box2d.BufferedPair'], []);
goog.addDependency("../../../box2d/collision/b2Collision.js", ['box2d.Collision'], ['box2d.ClipVertex']);
goog.addDependency("../../../box2d/collision/b2ContactID.js", ['box2d.ContactID'], ['box2d.Features']);
goog.addDependency("../../../box2d/collision/b2ContactPoint.js", ['box2d.ContactPoint'], ['box2d.ContactID', 'box2d.Vec2']);
goog.addDependency("../../../box2d/collision/b2Distance.js", ['box2d.Distance'], ['box2d.Math']);
goog.addDependency("../../../box2d/collision/b2Manifold.js", ['box2d.Manifold'], ['box2d.ContactPoint', 'box2d.Settings', 'box2d.Vec2']);
goog.addDependency("../../../box2d/collision/b2OBB.js", ['box2d.OBB'], ['box2d.Mat22', 'box2d.Vec2']);
goog.addDependency("../../../box2d/collision/b2Pair.js", ['box2d.Pair'], ['box2d.Settings']);
goog.addDependency("../../../box2d/collision/b2PairCallback.js", ['box2d.PairCallback'], []);
goog.addDependency("../../../box2d/collision/b2PairManager.js", ['box2d.PairManager'], ['box2d.BufferedPair', 'box2d.Pair']);
goog.addDependency("../../../box2d/collision/b2Proxy.js", ['box2d.Proxy'], ['box2d.Settings']);
goog.addDependency("../../../box2d/collision/ClipVertex.js", ['box2d.ClipVertex'], ['box2d.ContactID', 'box2d.Vec2']);
goog.addDependency("../../../box2d/collision/Features.js", ['box2d.Features'], []);
goog.addDependency("../../../box2d/collision/shapes/b2BoxDef.js", ['box2d.BoxDef'], ['box2d.Shape', 'box2d.ShapeDef', 'box2d.Vec2']);
goog.addDependency("../../../box2d/collision/shapes/b2CircleDef.js", ['box2d.CircleDef'], ['box2d.Shape', 'box2d.ShapeDef']);
goog.addDependency("../../../box2d/collision/shapes/b2CircleShape.js", ['box2d.CircleShape'], ['box2d.AABB', 'box2d.CircleDef', 'box2d.Mat22', 'box2d.Vec2']);
goog.addDependency("../../../box2d/collision/shapes/b2MassData.js", ['box2d.MassData'], ['box2d.Vec2']);
goog.addDependency("../../../box2d/collision/shapes/b2PolyDef.js", ['box2d.PolyDef'], ['box2d.Shape', 'box2d.ShapeDef', 'box2d.Vec2']);
goog.addDependency("../../../box2d/collision/shapes/b2PolyShape.js", ['box2d.PolyShape'], ['box2d.BoxDef', 'box2d.Mat22', 'box2d.OBB', 'box2d.PolyDef', 'box2d.Settings', 'box2d.Shape', 'box2d.Vec2']);
goog.addDependency("../../../box2d/collision/shapes/b2Shape.js", ['box2d.Shape'], ['box2d.Mat22', 'box2d.ShapeDef', 'box2d.Vec2']);
goog.addDependency("../../../box2d/collision/shapes/b2ShapeDef.js", ['box2d.ShapeDef'], ['box2d.Vec2']);
goog.addDependency("../../../box2d/collision/shapes/b2ShapeFactory.js", ['box2d.ShapeFactory'], ['box2d.BoxDef', 'box2d.CircleDef', 'box2d.CircleShape', 'box2d.PolyDef', 'box2d.PolyShape', 'box2d.ShapeDef']);
goog.addDependency("../../../box2d/common/b2Settings.js", ['box2d.Settings'], []);
goog.addDependency("../../../box2d/common/Util.js", ['box2d.Util'], []);
goog.addDependency("../../../box2d/common/math/b2Mat22.js", ['box2d.Mat22'], []);
goog.addDependency("../../../box2d/common/math/b2Math.js", ['box2d.Math'], ['box2d.Mat22', 'box2d.Vec2', 'goog.math']);
goog.addDependency("../../../box2d/common/math/b2Vec2.js", ['box2d.Vec2'], ['goog.math.Vec2']);
goog.addDependency("../../../box2d/dynamics/b2Body.js", ['box2d.Body'], ['box2d.MassData', 'box2d.Mat22', 'box2d.Math', 'box2d.ShapeFactory', 'box2d.Vec2']);
goog.addDependency("../../../box2d/dynamics/b2BodyDef.js", ['box2d.BodyDef'], ['box2d.Settings', 'box2d.ShapeDef']);
goog.addDependency("../../../box2d/dynamics/b2CollisionFilter.js", ['box2d.CollisionFilter'], []);
goog.addDependency("../../../box2d/dynamics/b2ContactManager.js", ['box2d.ContactManager'], ['box2d.Contact', 'box2d.ContactFactory', 'box2d.NullContact', 'box2d.PairCallback']);
goog.addDependency("../../../box2d/dynamics/b2Island.js", ['box2d.Island'], ['box2d.ContactSolver']);
goog.addDependency("../../../box2d/dynamics/b2TimeStep.js", ['box2d.TimeStep'], []);
goog.addDependency("../../../box2d/dynamics/b2World.js", ['box2d.World'], ['box2d.Body', 'box2d.BodyDef', 'box2d.BroadPhase', 'box2d.CollisionFilter', 'box2d.ContactManager', 'box2d.Island', 'box2d.JointDef', 'box2d.JointFactory', 'box2d.TimeStep', 'box2d.WorldListener']);
goog.addDependency("../../../box2d/dynamics/b2WorldListener.js", ['box2d.WorldListener'], []);
goog.addDependency("../../../box2d/dynamics/contacts/b2CircleContact.js", ['box2d.CircleContact'], ['box2d.CircleShape', 'box2d.Collision', 'box2d.Contact', 'box2d.Manifold']);
goog.addDependency("../../../box2d/dynamics/contacts/b2Conservative.js", ['box2d.Conservative'], []);
goog.addDependency("../../../box2d/dynamics/contacts/b2Contact.js", ['box2d.Contact'], ['box2d.ContactNode', 'box2d.ContactRegister']);
goog.addDependency("../../../box2d/dynamics/contacts/b2ContactConstraint.js", ['box2d.ContactConstraint'], ['box2d.ContactConstraintPoint', 'box2d.Settings', 'box2d.Vec2']);
goog.addDependency("../../../box2d/dynamics/contacts/b2ContactConstraintPoint.js", ['box2d.ContactConstraintPoint'], ['box2d.Vec2']);
goog.addDependency("../../../box2d/dynamics/contacts/b2ContactFactory.js", ['box2d.ContactFactory'], ['box2d.CircleContact', 'box2d.PolyAndCircleContact', 'box2d.PolyContact', 'box2d.Shape']);
goog.addDependency("../../../box2d/dynamics/contacts/b2ContactNode.js", ['box2d.ContactNode'], []);
goog.addDependency("../../../box2d/dynamics/contacts/b2ContactRegister.js", ['box2d.ContactRegister'], []);
goog.addDependency("../../../box2d/dynamics/contacts/b2ContactSolver.js", ['box2d.ContactSolver'], ['box2d.ContactConstraint', 'box2d.Settings']);
goog.addDependency("../../../box2d/dynamics/contacts/b2NullContact.js", ['box2d.NullContact'], ['box2d.Contact', 'box2d.ContactNode']);
goog.addDependency("../../../box2d/dynamics/contacts/b2PolyAndCircleContact.js", ['box2d.PolyAndCircleContact'], ['box2d.CircleShape', 'box2d.Contact', 'box2d.ContactNode', 'box2d.Manifold', 'box2d.PolyShape']);
goog.addDependency("../../../box2d/dynamics/contacts/b2PolyContact.js", ['box2d.PolyContact'], ['box2d.ContactNode', 'box2d.Manifold', 'box2d.Math', 'box2d.PolyShape']);
goog.addDependency("../../../box2d/dynamics/joints/b2DistanceJoint.js", ['box2d.DistanceJoint'], ['box2d.DistanceJointDef', 'box2d.Joint']);
goog.addDependency("../../../box2d/dynamics/joints/b2DistanceJointDef.js", ['box2d.DistanceJointDef'], ['box2d.JointDef']);
goog.addDependency("../../../box2d/dynamics/joints/b2GearJoint.js", ['box2d.GearJoint'], ['box2d.GearJointDef', 'box2d.Joint']);
goog.addDependency("../../../box2d/dynamics/joints/b2GearJointDef.js", ['box2d.GearJointDef'], ['box2d.JointDef']);
goog.addDependency("../../../box2d/dynamics/joints/b2Jacobian.js", ['box2d.Jacobian'], ['box2d.Vec2']);
goog.addDependency("../../../box2d/dynamics/joints/b2Joint.js", ['box2d.Joint'], ['box2d.JointNode']);
goog.addDependency("../../../box2d/dynamics/joints/b2JointDef.js", ['box2d.JointDef'], ['box2d.Joint']);
goog.addDependency("../../../box2d/dynamics/joints/b2JointFactory.js", ['box2d.JointFactory'], ['box2d.DistanceJoint', 'box2d.GearJoint', 'box2d.MouseJoint', 'box2d.PrismaticJoint', 'box2d.PulleyJoint', 'box2d.RevoluteJoint']);
goog.addDependency("../../../box2d/dynamics/joints/b2JointNode.js", ['box2d.JointNode'], []);
goog.addDependency("../../../box2d/dynamics/joints/b2MouseJoint.js", ['box2d.MouseJoint'], ['box2d.Joint', 'box2d.MouseJointDef']);
goog.addDependency("../../../box2d/dynamics/joints/b2MouseJointDef.js", ['box2d.MouseJointDef'], ['box2d.JointDef']);
goog.addDependency("../../../box2d/dynamics/joints/b2PrismaticJoint.js", ['box2d.PrismaticJoint'], ['box2d.Jacobian', 'box2d.Joint', 'box2d.PrismaticJointDef', 'box2d.Vec2']);
goog.addDependency("../../../box2d/dynamics/joints/b2PrismaticJointDef.js", ['box2d.PrismaticJointDef'], ['box2d.JointDef', 'box2d.Vec2']);
goog.addDependency("../../../box2d/dynamics/joints/b2PulleyJoint.js", ['box2d.PulleyJoint'], ['box2d.Joint', 'box2d.PulleyJointDef']);
goog.addDependency("../../../box2d/dynamics/joints/b2PulleyJointDef.js", ['box2d.PulleyJointDef'], ['box2d.JointDef']);
goog.addDependency("../../../box2d/dynamics/joints/b2RevoluteJoint.js", ['box2d.RevoluteJoint'], ['box2d.Joint', 'box2d.RevoluteJointDef']);
goog.addDependency("../../../box2d/dynamics/joints/b2RevoluteJointDef.js", ['box2d.RevoluteJointDef'], ['box2d.Joint', 'box2d.JointDef', 'box2d.Vec2']);
goog.addDependency("../../../easel/src/easeljs/display/Bitmap.js", ['Bitmap'], ['DisplayObject']);
goog.addDependency("../../../easel/src/easeljs/display/BitmapSequence.js", ['BitmapSequence'], []);
goog.addDependency("../../../easel/src/easeljs/display/Container.js", ['Container'], ['DisplayObject']);
goog.addDependency("../../../easel/src/easeljs/display/DisplayObject.js", ['DisplayObject'], ['Matrix2D', 'UID', 'EaselMouseEvent']);
goog.addDependency("../../../easel/src/easeljs/display/DisplayText.js", ['DisplayText'], ['DisplayObject']);
goog.addDependency("../../../easel/src/easeljs/display/Graphics.js", ['Graphics'], []);
goog.addDependency("../../../easel/src/easeljs/display/Shadow.js", [], []);
goog.addDependency("../../../easel/src/easeljs/display/Shape.js", ['Shape'], ['DisplayObject', 'Graphics']);
goog.addDependency("../../../easel/src/easeljs/display/SpriteSheet.js", ['SpriteSheet'], []);
goog.addDependency("../../../easel/src/easeljs/display/Stage.js", ['Stage'], ['Container']);
goog.addDependency("../../../easel/src/easeljs/events/EaselMouseEvent.js", ['EaselMouseEvent'], []);
goog.addDependency("../../../easel/src/easeljs/filters/BoxBlurFilter.js", ['BoxBlurFilter'], ['Filter']);
goog.addDependency("../../../easel/src/easeljs/filters/ColorFilter.js", ['ColorFilter'], ['Filter']);
goog.addDependency("../../../easel/src/easeljs/filters/ColorMatrixFilter.js", ['ColorMatrixFilter'], ['Filter']);
goog.addDependency("../../../easel/src/easeljs/filters/Filter.js", ['Filter'], []);
goog.addDependency("../../../easel/src/easeljs/geom/Matrix2D.js", ['Matrix2D'], []);
goog.addDependency("../../../easel/src/easeljs/geom/Point.js", ['Point'], []);
goog.addDependency("../../../easel/src/easeljs/geom/Rectangle.js", [], []);
goog.addDependency("../../../easel/src/easeljs/utils/SpriteSheetUtils.js", ['SpriteSheetUtils'], ['SpriteSheet']);
goog.addDependency("../../../easel/src/easeljs/utils/Ticker.js", ['Ticker'], []);
goog.addDependency("../../../easel/src/easeljs/utils/UID.js", ['UID'], []);

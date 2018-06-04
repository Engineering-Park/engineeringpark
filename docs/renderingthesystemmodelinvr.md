# Rendering the System Model as a 3D scene

The system model can be rendered as a 3D scene. This scene should be viewable either in VR or on a flat display. Ideally, this scene could also be viewed using AR.

- Elements are rendered as either:
  - primitive geometric shapes, or
  - 3D models of the actual component

- Relationships are rendered as lines connecting elements.

- Element geometry is a function of the element type.

- Element attributes are rendered according to the selected view, e.g:
  - Elements could be colour coded according to their status.

- Relationships attributes are rendered according to the selected view, e.g.:
  - All "specifies" relationships could be colour coded red.
  - All "built from" relationships could be colour coded black.

The number of attributes that can be represented within a single view is limited by the number of different ways that elements and relationships can be drawn. One idea for doing this is to create a table of possible attributes that a view may have (limited to a sensible set to enhance readability, etc.) and then allow the user to map the elements of the model onto the attributes of the view however they want. e.g.:

**View**: *Default*

Scene Element | Style | Element / Relationship | Attribute
--- | --- | --- | ---
? | grey, 50% | Document | -
? | grey, 50% | Concern | -
torus | grey, 50% | Requirement | -
sphere | grey, 50% | Function | -
box | grey, 50% | Component | -
cone | grey, 50% | Test | -
? | grey, 50% | Package | -
line | black | built from / built in | -
line | blue | specifies / specified by | -

**View**: *Specification Completeness*

Scene Element | Style | Element / Relationship | Attribute
--- | --- | --- | ---
torus | yellow | Requirement | does not have specifies
sphere | yellow | Function | does not have specified by
box | yellow | Component | does not have specified by

---
[Back to osevr on GitHub](https://github.com/lightzephyr/osevr)

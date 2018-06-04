This page serves as a record of design decisions:

| Date of Decision | Decision | Justified by Rationale | Affects System Element(s) |
| --- | --- | --- | --- |
| 2018-03-19 | **Each model element will be represented by a javascript object.** The object will have a reference to the corresponding voxel and will be responsible for listening to model change events and updating the voxel accordingly. | The JS objects form the abstraction layer between VSE and the A-Frame visualisation. This enables development of other representations of the model that are not based on voxels or A-Frame. The same JS object can be modified to update the alternative representations. | Elements |
| 2018-03-19 | **Each model element will be stored as a JSON object.** | JS objects can be created from JSON objects - and vice versa - with no effort. JSON is plain text and therefore it's use enables configuration control of the model using Git. | Elements |
| 2018-03-26 | **Element IDs will be simple integers that do not contain any information other than the element's unique identifier.** | It is not necessary to encode any additional information in the ID because such information can be added in attributes instead. | Elements |
| 2018-04-02 | **The schema will use underscore to separate words in parameter names.** | This enables parameter names to be split up and displayed properly in user interfaces. | Schema |
| 2018-06-02 | **Relationships are captured by an element's relationships attribute.** | An alternative approach would be to have relationships be there own elements - but this add complexity without any obvious gain. Relationships cannot exist without the elements that are relating to each other and therefore, semantically, it makes more sense to define the relationships together with the entities than to split them out by themselves. | Schema |

---
[Back to osevr on GitHub](https://github.com/lightzephyr/osevr)

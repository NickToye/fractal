---
title: Orthogonality
status: inprogress
---

Orthogonality in programming language design is the ability to use various language features in arbitrary combinations with consistent results.

Orthogonality is a system design property which guarantees that modifying the technical effect produced by a component of a system neither creates nor propagates side effects to other components of the system. Typically this is achieved through the separation of concerns and encapsulation, and it is essential for feasible and compact designs of complex systems. The emergent behavior of a system consisting of components should be controlled strictly by formal definitions of its logic and not by side effects resulting from poor integration, i.e., non-orthogonal design of modules and interfaces. Orthogonality reduces testing and development time because it is easier to verify designs that neither cause side effects nor depend on them.

## Key Points

* Reduces _interdependence._
* Improves _composability_.
* _Separates_ concerns.
* _Reduces_ collisions.
* _Removes_ side effects.
* _Good litmus test_: can we reorder imports?
* Another good test: _will it nest?_
* Can things be _combined in the DOM_?
* Well-scoped selectors _improve orthoganility_.

---
title: HTML Naming Conventions
status: inprogress
label: HTML Naming Conventions
---

As I previously hinted at, naming conventions aren’t necessarily all that useful in your CSS. Where naming conventions’ power really lies is in your markup. Take the following, non-naming-conventioned HTML:

```
<div class="box  profile  pro-user">

    <img class="avatar  image" />

    <p class="bio">...</p>

</div>
```

How are the classes box and profile related to each other? How are the classes profile and avatar related to each other? Are they related at all? Should you be using pro-user alongside bio? Will the classes image and profile live in the same part of the CSS? Can you use avatar anywhere else?

From that markup alone, it is very hard to answer any of those questions. Using a naming convention, however, changes all that:

```
<div class="box  profile  profile--is-pro-user">

    <img class="avatar  profile__image" />

    <p class="profile__bio">...</p>

</div>
```

Now we can clearly see which classes are and are not related to each other, and how; we know what classes we can’t use outside of the scope of this component; and we know which classes we may be free to reuse elsewhere.

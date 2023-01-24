---
title: "Quick-Start Guide"
permalink: /docs/downloads/select/
excerpt: "The main download page for the StimDeck applications."
last_modified_at: 2023-01-18T00:00:00-00:00
#redirect_from:
#  - /theme-setup/
toc: false
---


<div class="download-heading">For Users</div>

<div class="download-heading-text">
{% capture text %}
If you're looking for the StimDeck application, you're in the right place.
{% endcapture %}
{{ text | markdownify }}
</div>

<div class="download-blurbs">

<div class="download-blurb">
{% capture blurb %}
{% include_relative downloads/_fragments/macos.md %}
{% endcapture %}
{{ blurb | markdownify }}
</div>

<div class="download-blurb">
{% capture blurb %}
{% include_relative downloads/_fragments/windows.md %}
{% endcapture %}
{{ blurb | markdownify }}
</div>

<div class="download-blurb">
{% capture blurb %}
{% include_relative downloads/_fragments/linux.md %}
{% endcapture %}
{{ blurb | markdownify }}
</div>

</div>


<div class="download-heading-text">
{% capture text %}
StimDeck is a heads up display (HUD) for the [Stimulus.com](https://stimulus.com/) social media site. If you've ever used the [HUD for the blue-bird site](https://tweetdeck.twitter.com/), then you already know how things work. If you need a little more guidance, check out the [User Documentation]({{site.baseurl}}/docs/guides/user/).
{% endcapture %}
{{ text | markdownify }}
</div>



<div class="download-heading"><a name="source-code"></a>For Developers</div>
<div class="download-heading-text">
<p>If you're looking for the StimDeck source code, you're in the right place.</p>
</div>

<div class="download-blurbs">

<div class="download-blurb-half-width">&nbsp;</div>

<div class="download-blurb">
{% capture blurb %}
{% include_relative downloads/_fragments/source-code.md %}
{% endcapture %}
{{ blurb | markdownify }}
</div>

<div class="download-blurb">
{% capture blurb %}
{% include_relative downloads/_fragments/source-boilerplate.md %}
{% endcapture %}
{{ blurb | markdownify }}
</div>

<div class="download-blurb-half-width">&nbsp;</div>

</div>

<div class="download-heading-text">
{% capture text %}
If you're comfortable with tinkering with code, [fork the repo](https://github.com/groundh0g/StimDeck/fork) and have at it. The [README.md](https://github.com/groundh0g/StimDeck#readme) should have all you need to get going. When you're ready for more details about the functionality and rationales behind design choices, check out the [Developer Documentation]({{site.baseurl}}/docs/guides/developer/).
{% endcapture %}
{{ text | markdownify }}
</div>


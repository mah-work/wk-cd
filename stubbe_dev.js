<div class="clerk_section_wrapper">
    <div class="clerk section">
       <span
       class="clerk" id="clerk-content-two" data-api="{{ section.settings.clerk_select }}" data-limit="4" data-products="[{{ product.id}}]">
       <div id="ProductGridContainerClerkTwo" class="clerk-section page-width">
          <slider-component class="slider-mobile-gutter page-width slider-component-desktop clerkSectionForTwo" style="display: none;">
             (% raw %)
             <ul id="Slider-{{ clerkSectionId }}" class="grid product-grid contains-card contains-card--product contains-card--standard grid--4-col-desktop grid--1-col-tablet-down slider show_desktop_slider slider--desktop slider--tablet grid--peek">
                {% for product in products %}
                    {% if product.vendor != "gift card" %}
                        {% assign loopLengthTwo = loop.length %}
                        <li id="Slide-{{ clerkSectionId }}-{{ loop.index }}" class="grid_item slider_slide" >
                        <a href="{{ product.url}}" style="text-decoration: none; display: block;" data-clerk-product-id="{{ product.id }}">
                      {% if product.images.length > 1 %}
                        <img class="" style="width: 100%" src="{{ product.image }}" onMouseOver="this.src='{{ product.images[1] }}'" onMouseout="this.src='{{ product.image }}'" />
                      {% else %}
                      <img class="" style="width: 100%" src="{{ product.image }}" />
                      {% endif %}
                      <div class="card__information">
                         <h3 class="card__heading h5">
                            <div class="topTextContainer">
                               <span class="card_label">
                                <div class="full-unstyled-link card tag">
                                    {% assign containsCustomtag = false %}
                                    {% for tag in product.tags %}
                                    {% if tag contains "customtag" %}
                                    true %)
                                    {% assign containsCustomtag {{tag.split("customtag_")[1] })
                                    {% endif %)
                                    {% endfor %)
                                    {% if containsCustomtag== false %}
                                    {% for tag in product.tags %}
                                    {% if tag='New' %}
                                    {% if current_domain contains 'dk' %)NY{% else %)NEW{% endif %}
                                    {% endif %)
                                    {% endfor %}
                                    {% endif %)
                                </div>
                               </span>
                            </div>
                            <span class="full-unstyled-link card_name">{{ product.name}}</span>
                         </h3>
                         <div class="price">
                            <div class="price_container">
                               {% if product.price_max < product.list_price %}
                               <div class="price_sale">
                                  <span>
                                  <s class="price-item price-item--regular" style="text-decoration: line-through important;">{{ product.list_price❘ currency_converter }}</s>
                                  <span class="price-item price-item--sale price-item--last">{{ product.price_max | currency_converter }}</span> </span>
                               </div>
                               {% else %)
                               <div class="price_regular">
                                  <span class="price-item price-item--regular">
                                  {{ product.price_max❘ currency_converter }}
                                  </span>
                               </div>
                               {% endif %)
                            </div>
                            {% if product.on_sale true and product.stock_count > @ %}
                            <span class="badge badge--bottom-left color-accent-1" style="float: right; font-weight: bold important;">{% if current_domain contains 'dk' %)UDSALG{% else %)SALE{% endif %}</span> {% endif %}
                         </div>
                      </div>
                   </a>
                </li>
                {% endif %)
                {% endfor %)
             </ul>
             {% endraw)
          </slider-component>
       </div>
       </span>
    </div>
 </div>
 <script src="{{ 'clerk-menu.js' | asset_url}}" defer="defer"></script> 
 <script>
    Clerk('config', {
        globals: {
            clerkSectionId: "{{ section.id }}"
        }
    });
 </script>
 

const u_to_a = require('./u_to_a.js');
const a5_to_a8 = require('./a5_to_a8.js');
const a8_to_a5 = require('./a8_to_a5.js');
const a5_to_a54 = require('./a5_to_a54.js');
class transliterator {
  transliterate_dom_node(node_arg, ztr_direction_const=0) {
    let dikt_pair_list = [];
    let curr_dikt_pair = null;
    let curr_node_text = "";
    let text = "";
    let nekst_node = null;
    let ztred_span_list = null;
    let nekst_ztred_span = null;
    let nodeIterator = node_arg.ownerDocument.createNodeIterator(
        node_arg,
        NodeFilter.SHOW_TEXT,
        { acceptNode: (node) => { if (node.parentNode && node.parentNode.nodeName !== 'SCRIPT') { return NodeFilter.FILTER_ACCEPT; } } },
        false
    );

    nekst_node = nodeIterator.nextNode() ;
    while (nekst_node) {
      dikt_pair_list.push({ tekstNode: nekst_node, start: text.length });
      text += nekst_node.nodeValue;
      nekst_node = nodeIterator.nextNode()
    }
    if (!dikt_pair_list.length) return;
    for (let i = 0; i < dikt_pair_list.length; ++i) { curr_dikt_pair = dikt_pair_list[i];
      curr_node_text = curr_dikt_pair.tekstNode.textContent;
      // if (curr_node_text.match(/^\s+$/)){ continue; }
      var spanNode = document.createElement("span");
      spanNode.className = "ztred";
      spanNode.dataset.oldtekst = curr_node_text;
      curr_dikt_pair.tekstNode.parentNode.replaceChild(spanNode, curr_dikt_pair.tekstNode);
      spanNode.appendChild(curr_dikt_pair.tekstNode);
    }
    ztred_span_list = node_arg.getElementsByClassName('ztred');
    switch(ztr_direction_const) {
      case "u_to_a5" :
        for (let i = 0; i < ztred_span_list.length; ++i)
        {
          nekst_ztred_span = ztred_span_list[i];
          nekst_ztred_span.textContent = u_to_a(nekst_ztred_span.textContent,false);
        }
        break;
      case "u_to_a8" :
        for (let i = 0; i < ztred_span_list.length; ++i)
        {
          nekst_ztred_span = ztred_span_list[i];
          nekst_ztred_span.textContent = u_to_a(nekst_ztred_span.textContent,true);
        }
        break;
      case "a5_to_a54" : // return a5_to_a8(input_node_textstr);
        for (let i = 0; i < ztred_span_list.length; ++i)
        {
          nekst_ztred_span = ztred_span_list[i];
          nekst_ztred_span.textContent = a5_to_a54(nekst_ztred_span.textContent);
        }
        break;        
      case "a5_to_a8" : // return a5_to_a8(input_node_textstr);
        for (let i = 0; i < ztred_span_list.length; ++i)
        {
          nekst_ztred_span = ztred_span_list[i];
          nekst_ztred_span.textContent = a5_to_a8(nekst_ztred_span.textContent);
        }
        break;
      case "a8_to_a5" : // return a8_to_a5(input_node_textstr);
        for (let i = 0; i < ztred_span_list.length; ++i)
        {
          nekst_ztred_span = ztred_span_list[i];
          nekst_ztred_span.textContent = a8_to_a5(nekst_ztred_span.textContent);
        }
        break;
      case "upper_case" :
        for (let i = 0; i < ztred_span_list.length; ++i)
        {
          nekst_ztred_span = ztred_span_list[i];
          nekst_ztred_span.style.textTransform = "uppercase";
        }
        break;
      case "loAr_case" :
        for (let i = 0; i < ztred_span_list.length; ++i)
        {
          nekst_ztred_span = ztred_span_list[i];
          nekst_ztred_span.style.textTransform = "lowercase";
        }
        break;
      case "init_case" :
        for (let i = 0; i < ztred_span_list.length; ++i)
        {
          nekst_ztred_span = ztred_span_list[i];
          nekst_ztred_span.style.textTransform = "initial";
        }
        break;
      case "no_case_change" :
        for (let i = 0; i < ztred_span_list.length; ++i)
        {
          nekst_ztred_span = ztred_span_list[i];
          nekst_ztred_span.style.textTransform = "none";
        }
        break;
      case "mlyalm54" : for (let i = 0; i < ztred_span_list.length; ++i) { nekst_ztred_span = ztred_span_list[i]; nekst_ztred_span.style.fontFamily = "mlyalm54"; } break;
      case "mlyalm58" : for (let i = 0; i < ztred_span_list.length; ++i) { nekst_ztred_span = ztred_span_list[i]; nekst_ztred_span.style.fontFamily = "mlyalm58"; } break;
      case "tmil54" : for (let i = 0; i < ztred_span_list.length; ++i) { nekst_ztred_span = ztred_span_list[i]; nekst_ztred_span.style.fontFamily = "tmil54"; } break;
      case "tmil58" : for (let i = 0; i < ztred_span_list.length; ++i) { nekst_ztred_span = ztred_span_list[i]; nekst_ztred_span.style.fontFamily = "tmil58"; } break;
      case "telugu54" : for (let i = 0; i < ztred_span_list.length; ++i) { nekst_ztred_span = ztred_span_list[i]; nekst_ztred_span.style.fontFamily = "telugu54"; } break;
      case "telugu58" : for (let i = 0; i < ztred_span_list.length; ++i) { nekst_ztred_span = ztred_span_list[i]; nekst_ztred_span.style.fontFamily = "telugu58"; } break;
      case "kannada54" : for (let i = 0; i < ztred_span_list.length; ++i) { nekst_ztred_span = ztred_span_list[i]; nekst_ztred_span.style.fontFamily = "kannada54"; } break;
      case "kannada58" : for (let i = 0; i < ztred_span_list.length; ++i) { nekst_ztred_span = ztred_span_list[i]; nekst_ztred_span.style.fontFamily = "kannada58"; } break;
      case "hin54" : for (let i = 0; i < ztred_span_list.length; ++i) { nekst_ztred_span = ztred_span_list[i]; nekst_ztred_span.style.fontFamily = "hin54"; } break;
      case "hin58" : for (let i = 0; i < ztred_span_list.length; ++i) { nekst_ztred_span = ztred_span_list[i]; nekst_ztred_span.style.fontFamily = "hin58"; } break;
      case "guz54" : for (let i = 0; i < ztred_span_list.length; ++i) { nekst_ztred_span = ztred_span_list[i]; nekst_ztred_span.style.fontFamily = "guz54"; } break; 
      case "guz58" : for (let i = 0; i < ztred_span_list.length; ++i) { nekst_ztred_span = ztred_span_list[i]; nekst_ztred_span.style.fontFamily = "guz58"; } break; 
      case "bangla54" : for (let i = 0; i < ztred_span_list.length; ++i) { nekst_ztred_span = ztred_span_list[i]; nekst_ztred_span.style.fontFamily = "bangla54"; } break;
      case "bangla58" : for (let i = 0; i < ztred_span_list.length; ++i) { nekst_ztred_span = ztred_span_list[i]; nekst_ztred_span.style.fontFamily = "bangla58"; } break;
      case "odia54" : for (let i = 0; i < ztred_span_list.length; ++i) { nekst_ztred_span = ztred_span_list[i]; nekst_ztred_span.style.fontFamily = "odia54"; } break; 
      case "odia58" : for (let i = 0; i < ztred_span_list.length; ++i) { nekst_ztred_span = ztred_span_list[i]; nekst_ztred_span.style.fontFamily = "odia58"; } break; 
      case "pnzabi54" : for (let i = 0; i < ztred_span_list.length; ++i) { nekst_ztred_span = ztred_span_list[i]; nekst_ztred_span.style.fontFamily = "pnzabi54"; } break;  
      case "pnzabi58" : for (let i = 0; i < ztred_span_list.length; ++i) { nekst_ztred_span = ztred_span_list[i]; nekst_ztred_span.style.fontFamily = "pnzabi58"; } break;  
      case "unicase54" : for (let i = 0; i < ztred_span_list.length; ++i) { nekst_ztred_span = ztred_span_list[i]; nekst_ztred_span.style.fontFamily = "unicase54"; } break;                                                         
    }
  }
  untransliterate_dom_node() {
    let nodes = document.getElementsByClassName('ztred');
    let node = null;
    for (let i = 0;i < nodes.length;i++) {
      node = nodes[i];
      if(node.innerText.charCodeAt(0) != node.innerText.charCodeAt(0)) continue ;
      node.innerText = node.dataset.oldtekst;
    }
  }
}
module.exports = transliterator

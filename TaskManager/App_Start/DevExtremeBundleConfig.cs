using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace TaskManager
{
    public class DevExtremeBundleConfig {

        public static void RegisterBundles(BundleCollection bundles) {

            var scriptBundle = new ScriptBundle("~/Scripts/DevExtremeBundle");
            var styleBundle = new StyleBundle("~/Content/DevExtremeBundle");

            // CLDR scripts
            scriptBundle
                .Include("~/Scripts/cldr.js")
                .Include("~/Scripts/cldr/event.js")
                .Include("~/Scripts/cldr/supplemental.js")
                .Include("~/Scripts/cldr/unresolved.js");

            // Globalize 1.x
            scriptBundle
                .Include("~/Scripts/globalize.js")
                .Include("~/Scripts/globalize/message.js")
                .Include("~/Scripts/globalize/number.js")
                .Include("~/Scripts/globalize/currency.js")
                .Include("~/Scripts/globalize/date.js");

            // DevExtreme + extensions
            scriptBundle
                .Include("~/Scripts/dx.all.js");

            // DevExtreme
            // NOTE: see the available theme list here: http://js.devexpress.com/Documentation/Guide/Themes/Predefined_Themes/                    
            styleBundle
                .Include("~/Content/dx.common.css")
                .Include("~/Content/dx.light.css");


            bundles.Add(scriptBundle);
            bundles.Add(styleBundle);

#if !DEBUG
            BundleTable.EnableOptimizations = true;
#endif
        }
    }
}
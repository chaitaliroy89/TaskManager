/*!
* DevExtreme (dx.messages.sv.js)
* Version: 18.1.6
* Build date: Mon Sep 03 2018
*
* Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"))
        })
    } else {
        if ("object" === typeof module && module.exports) {
            factory(require("devextreme/localization"))
        } else {
            factory(DevExpress.localization)
        }
    }
}(this, function(localization) {
    localization.loadMessages({
        sv: {
            Yes: "Ja",
            No: "Nej",
            Cancel: "Avbryt",
            Clear: "Rensa",
            Done: "Klar",
            Loading: "Laddar...",
            Select: "Välj...",
            Search: "Sök",
            Back: "Tillbaka",
            OK: "OK",
            "dxCollectionWidget-noDataText": "Inget data att visa",
            "validation-required": "Krävs",
            "validation-required-formatted": "{0} krävs",
            "validation-numeric": "Värdet måste vara ett nummer",
            "validation-numeric-formatted": "{0} måste vara ett nummer",
            "validation-range": "Värdet utanför tillåtet intervall",
            "validation-range-formatted": "{0} utanför tillåtet intervall",
            "validation-stringLength": "Längden på värdet är inte korrekt",
            "validation-stringLength-formatted": "Längden på  {0} är inte korrekt",
            "validation-custom": "Ogiltigt värde",
            "validation-custom-formatted": "{0} är ogiltigt",
            "validation-compare": "Värdena matchar inte",
            "validation-compare-formatted": "{0} matchar inte",
            "validation-pattern": "Värdet matchar inte mönster",
            "validation-pattern-formatted": "{0} matchar inte mönster",
            "validation-email": "E-post är ogiltigt",
            "validation-email-formatted": "{0} är ogiltigt",
            "validation-mask": "Värdet är ogiltigt",
            "dxLookup-searchPlaceholder": "Minsta antal tecken: {0}",
            "dxList-pullingDownText": "Dra neråt för att uppdatera...",
            "dxList-pulledDownText": "Släpp för att uppdatera...",
            "dxList-refreshingText": "Uppdaterar...",
            "dxList-pageLoadingText": "Laddar...",
            "dxList-nextButtonText": "Mer",
            "dxList-selectAll": "Välj alla",
            "dxListEditDecorator-delete": "Radera",
            "dxListEditDecorator-more": "Mer",
            "dxScrollView-pullingDownText": "Dra neråt för att uppdatera...",
            "dxScrollView-pulledDownText": "Släpp för att uppdatera...",
            "dxScrollView-refreshingText": "uppdaterar...",
            "dxScrollView-reachBottomText": "Laddar...",
            "dxDateBox-simulatedDataPickerTitleTime": "Välj tid",
            "dxDateBox-simulatedDataPickerTitleDate": "Välj datum",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Välj datum och tid",
            "dxDateBox-validation-datetime": "Värdet måste vara ett datum eller en tid",
            "dxFileUploader-selectFile": "Välj fil",
            "dxFileUploader-dropFile": "eller släpp filen här",
            "dxFileUploader-bytes": "byte",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Ladda upp",
            "dxFileUploader-uploaded": "Uppladdad",
            "dxFileUploader-readyToUpload": "Klar att ladda upp",
            "dxFileUploader-uploadFailedMessage": "Uppladdning misslyckades",
            "dxRangeSlider-ariaFrom": "Från",
            "dxRangeSlider-ariaTill": "Till",
            "dxSwitch-onText": "PÅ",
            "dxSwitch-offText": "AV",
            "dxForm-optionalMark": "valfri",
            "dxForm-requiredMessage": "{0} är nödvändigt",
            "dxNumberBox-invalidValueMessage": "Värdet måste vara ett nummer",
            "dxDataGrid-columnChooserTitle": "Kolumnväljare",
            "dxDataGrid-columnChooserEmptyText": "Dra en kolumn hit för att dölja den",
            "dxDataGrid-groupContinuesMessage": "Fortsätter på nästa sida",
            "dxDataGrid-groupContinuedMessage": "Fortsättning från föregående sida",
            "dxDataGrid-groupHeaderText": "Gruppera enligt denna kolumn",
            "dxDataGrid-ungroupHeaderText": "Avgruppera",
            "dxDataGrid-ungroupAllText": "Avgruppera allt",
            "dxDataGrid-editingEditRow": "Redigera",
            "dxDataGrid-editingSaveRowChanges": "Spara",
            "dxDataGrid-editingCancelRowChanges": "Avbryt",
            "dxDataGrid-editingDeleteRow": "Radera",
            "dxDataGrid-editingUndeleteRow": "Ångra radering",
            "dxDataGrid-editingConfirmDeleteMessage": "Är du säker på att du vill radera denna post?",
            "dxDataGrid-validationCancelChanges": "Avbryt ändringarna",
            "dxDataGrid-groupPanelEmptyText": "Dra en kolumnrubrik hit för att gruppera enligt den kolumnen",
            "dxDataGrid-noDataText": "Inget data",
            "dxDataGrid-searchPanelPlaceholder": "Sök...",
            "dxDataGrid-filterRowShowAllText": "(Allt)",
            "dxDataGrid-filterRowResetOperationText": "Återställ",
            "dxDataGrid-filterRowOperationEquals": "Är lika med",
            "dxDataGrid-filterRowOperationNotEquals": "Är olika",
            "dxDataGrid-filterRowOperationLess": "Mindre än",
            "dxDataGrid-filterRowOperationLessOrEquals": "Mindre än eller lika med",
            "dxDataGrid-filterRowOperationGreater": "Större än",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Större än eller lika med",
            "dxDataGrid-filterRowOperationStartsWith": "Börjar med",
            "dxDataGrid-filterRowOperationContains": "Innehåller",
            "dxDataGrid-filterRowOperationNotContains": "Innehåller inte",
            "dxDataGrid-filterRowOperationEndsWith": "Slutar med",
            "dxDataGrid-filterRowOperationBetween": "Mellan",
            "dxDataGrid-filterRowOperationBetweenStartText": "Start",
            "dxDataGrid-filterRowOperationBetweenEndText": "Slut",
            "dxDataGrid-applyFilterText": "Använd filter",
            "dxDataGrid-trueText": "sant",
            "dxDataGrid-falseText": "falskt",
            "dxDataGrid-sortingAscendingText": "Sortera stigande",
            "dxDataGrid-sortingDescendingText": "Sortera fallande",
            "dxDataGrid-sortingClearText": "Rensa sortering",
            "dxDataGrid-editingSaveAllChanges": "Spara ändringar",
            "dxDataGrid-editingCancelAllChanges": "Ångra ändringar",
            "dxDataGrid-editingAddRow": "Lägg till rad",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Minimi av {1} är {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Maximi av {1} är {0}",
            "dxDataGrid-summaryAvg": "Medel: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Medeltal av {1} är {0}",
            "dxDataGrid-summarySum": "Sum: {0}",
            "dxDataGrid-summarySumOtherColumn": "Summan av {1} är {0}",
            "dxDataGrid-summaryCount": "Antal: {0}",
            "dxDataGrid-columnFixingFix": "Fixera",
            "dxDataGrid-columnFixingUnfix": "Avfixera",
            "dxDataGrid-columnFixingLeftPosition": "Till vänster",
            "dxDataGrid-columnFixingRightPosition": "Till höger",
            "dxDataGrid-exportTo": "Exportera",
            "dxDataGrid-exportToExcel": "Exportera till Excel fil",
            "dxDataGrid-excelFormat": "Excel fil",
            "dxDataGrid-selectedRows": "Valda rader",
            "dxDataGrid-exportSelectedRows": "Exportera valda rader",
            "dxDataGrid-exportAll": "Exportera allt",
            "dxDataGrid-headerFilterEmptyValue": "(Tomma)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Avbryt",
            "dxDataGrid-ariaColumn": "Kolumn",
            "dxDataGrid-ariaValue": "Värde",
            "dxDataGrid-ariaFilterCell": "Filtrera cell",
            "dxDataGrid-ariaCollapse": "Kollapsa",
            "dxDataGrid-ariaExpand": "Expandera",
            "dxDataGrid-ariaDataGrid": "Datarutnät",
            "dxDataGrid-ariaSearchInGrid": "Sök i datarutnätet",
            "dxDataGrid-ariaSelectAll": "Välj allt",
            "dxDataGrid-ariaSelectRow": "Välj rad",
            "dxDataGrid-filterBuilderPopupTitle": "Filterverktyg",
            "dxDataGrid-filterPanelCreateFilter": "Skapa filter",
            "dxDataGrid-filterPanelClearFilter": "Rensa",
            "dxDataGrid-filterPanelFilterEnabledHint": "Aktivera filter",
            "dxTreeList-ariaTreeList": "Trädlista",
            "dxTreeList-editingAddRowToNode": "Lägg till",
            "dxPager-infoText": "Sida {0} av {1} ({2} uppgifter)",
            "dxPager-pagesCountText": "av",
            "dxPivotGrid-grandTotal": "Totalsumma",
            "dxPivotGrid-total": "{0} Summa",
            "dxPivotGrid-fieldChooserTitle": "Fältväljare",
            "dxPivotGrid-showFieldChooser": "Visa fältväljare",
            "dxPivotGrid-expandAll": "Expandera alla",
            "dxPivotGrid-collapseAll": "Kollapsa alla",
            "dxPivotGrid-sortColumnBySummary": 'Sortera "{0}" enligt denna kolumn',
            "dxPivotGrid-sortRowBySummary": 'Sortera "{0}" enligt denna rad',
            "dxPivotGrid-removeAllSorting": "Avlägsna all sortering",
            "dxPivotGrid-dataNotAvailable": "Saknas",
            "dxPivotGrid-rowFields": "Radfält",
            "dxPivotGrid-columnFields": "Kolumnfält",
            "dxPivotGrid-dataFields": "Datafält",
            "dxPivotGrid-filterFields": "Filterfält",
            "dxPivotGrid-allFields": "Alla fält",
            "dxPivotGrid-columnFieldArea": "Släpp kolumnfält här",
            "dxPivotGrid-dataFieldArea": "Släpp datafält här",
            "dxPivotGrid-rowFieldArea": "Släpp radfält här",
            "dxPivotGrid-filterFieldArea": "Släpp filterfält här",
            "dxScheduler-editorLabelTitle": "Ämne",
            "dxScheduler-editorLabelStartDate": "Startdatum",
            "dxScheduler-editorLabelEndDate": "Slutdatum",
            "dxScheduler-editorLabelDescription": "Beskrivning",
            "dxScheduler-editorLabelRecurrence": "Upprepa",
            "dxScheduler-openAppointment": "Öppna avtalad tid",
            "dxScheduler-recurrenceNever": "Aldrig",
            "dxScheduler-recurrenceDaily": "Varje dag",
            "dxScheduler-recurrenceWeekly": "Varje vecka",
            "dxScheduler-recurrenceMonthly": "Varje månad",
            "dxScheduler-recurrenceYearly": "Varje år",
            "dxScheduler-recurrenceEvery": "Varje",
            "dxScheduler-recurrenceEnd": "Upprepning slutar",
            "dxScheduler-recurrenceAfter": "Efter",
            "dxScheduler-recurrenceOn": "På",
            "dxScheduler-recurrenceRepeatDaily": "dagar",
            "dxScheduler-recurrenceRepeatWeekly": "veckor",
            "dxScheduler-recurrenceRepeatMonthly": "månader",
            "dxScheduler-recurrenceRepeatYearly": "år",
            "dxScheduler-switcherDay": "Dag",
            "dxScheduler-switcherWeek": "Vecka",
            "dxScheduler-switcherWorkWeek": "Arbetsvecka",
            "dxScheduler-switcherMonth": "Månad",
            "dxScheduler-switcherAgenda": "Agenda",
            "dxScheduler-switcherTimelineDay": "Tidslinje dag",
            "dxScheduler-switcherTimelineWeek": "Tidslinje vecka",
            "dxScheduler-switcherTimelineWorkWeek": "Tidslinje arbetsvecka",
            "dxScheduler-switcherTimelineMonth": "Tidslinje månad",
            "dxScheduler-recurrenceRepeatOnDate": "på datumet",
            "dxScheduler-recurrenceRepeatCount": "upprepning(ar)",
            "dxScheduler-allDay": "Hela dagen",
            "dxScheduler-confirmRecurrenceEditMessage": "Vill du redigera bara denna avtalade tid eller hela serien?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Vill du radera bara denna avtalade tid eller hela serien?",
            "dxScheduler-confirmRecurrenceEditSeries": "Redigera serien",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Radera serien",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Redigera avtalad tid",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Radera avtalad tid",
            "dxScheduler-noTimezoneTitle": "Ingen tidszon",
            "dxScheduler-moreAppointments": "{0} mer",
            "dxCalendar-todayButtonText": "I dag",
            "dxCalendar-ariaWidgetName": "Kalender",
            "dxColorView-ariaRed": "Röd",
            "dxColorView-ariaGreen": "Grön",
            "dxColorView-ariaBlue": "Blå",
            "dxColorView-ariaAlpha": "Transparens",
            "dxColorView-ariaHex": "Färgkod",
            "dxTagBox-selected": "{0} valda",
            "dxTagBox-allSelected": "Alla valda ({0})",
            "dxTagBox-moreSelected": "{0} mer",
            "vizExport-printingButtonText": "Skriv ut",
            "vizExport-titleMenuText": "Export/Utskrift",
            "vizExport-exportButtonText": "{0} fil",
            "dxFilterBuilder-and": "Och",
            "dxFilterBuilder-or": "Eller",
            "dxFilterBuilder-notAnd": "Inte och",
            "dxFilterBuilder-notOr": "Inte eller",
            "dxFilterBuilder-addCondition": "Lägg till villkor",
            "dxFilterBuilder-addGroup": "Lägg till grupp",
            "dxFilterBuilder-enterValueText": "<ange värde>",
            "dxFilterBuilder-filterOperationEquals": "Är lika med",
            "dxFilterBuilder-filterOperationNotEquals": "Är olika",
            "dxFilterBuilder-filterOperationLess": "Mindre än",
            "dxFilterBuilder-filterOperationLessOrEquals": "Mindre än eller lika med",
            "dxFilterBuilder-filterOperationGreater": "Större än",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Större än eller lika med",
            "dxFilterBuilder-filterOperationStartsWith": "Börjar med",
            "dxFilterBuilder-filterOperationContains": "Innehåller",
            "dxFilterBuilder-filterOperationNotContains": "Innehåller inte",
            "dxFilterBuilder-filterOperationEndsWith": "Slutar med",
            "dxFilterBuilder-filterOperationIsBlank": "Är tom",
            "dxFilterBuilder-filterOperationIsNotBlank": "Är inte tom",
            "dxFilterBuilder-filterOperationBetween": "Mellan",
            "dxFilterBuilder-filterOperationAnyOf": "Någon av",
            "dxFilterBuilder-filterOperationNoneOf": "Ingen av"
        }
    })
});

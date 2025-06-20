<template>
    <div class="product-spec-table">
        <div v-for="(item, idx) in specs" :key="idx" class="spec-row">
            <div class="spec-label">{{ item.label }}</div>
            <div class="spec-value">{{ item.value }}</div>
        </div>
    </div>
</template>

<script >
export default {
    name: "ProductSpecification",
    props: {
        specs: {
            type: Array,
            required: true,
            default: () => [
                { label: "Product name", value: "Cream Boxes" },
                { label: "Dimensions", value: "Available in All Custom Sizes & Shapes" },
                { label: "Printing", value: "All types of Custom Printings, CMYK Colors, RGB Colors, PMS (Pantone) Colors, Metallic Colors" },
                { label: "Stock", value: "12pt to 32pt, White Card, Kraft Brown Card, White Corrugated, Kraft Brown Corrugated, Bux Board" },
                { label: "Box Style", value: "Available in all Custom Shapes, Sizes and Finishings" },
                { label: "Inks & Print Quality", value: "ECO Friendly & Soy inks available for High Quality Printing" },
                { label: "Finishing Options", value: "Foil Stamping, Embossing, Debossing, Raised Ink Effect" },
                { label: "Quantities", value: "Order any Quantity from 100 to 500'000" },
                { label: "Coating", value: "Glossy Lamination, Matte Lamination, Flood UV, Spot UV, Varnish, Aqueous Coating" },
                { label: "Default Process", value: "Die Cutting, Scoring, Gluing, Perforation" },
                { label: "Die Cut", value: "Custom Window Cut Out, Gold/Silver Foiling, Embossing, Raised Ink, PVC Sheet" },
                { label: "Proofing", value: "Flat View, 3D Mock-up, Digital or Press Proof Hardcopy can be ordered" },
                { label: "Turnaround Time", value: "7-8 Business Days for Production & 3-4 Business Days for Shipping. Expedite Production Service is also available" }
            ]
        }
    }
};
</script>

<style scoped>
.product-spec-table {
    border-top: 1px solid #ccc;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 0.95rem;
}

.spec-row {
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    padding: 10px 0;
    align-items: flex-start;
}

.spec-label {
    flex: 1;
    font-weight: 600;
    color: #333;
    min-width: 160px;
}

.spec-value {
    flex: 2;
    color: #555;
    line-height: 1.5;
}
</style>

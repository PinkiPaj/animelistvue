<template>
    <v-container>
        <v-row>
            <v-col>
                <p
                v-for="(news,i) in news"
                :key ="i"
                >
                {{news.text}}
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'indexComp',
    data:()=>({
        news: [
        {
            text: 'Ffff',
            href: ''
        },
        {
            text: 'AAAA'
        }
        ],
    }
    )
}
</script>
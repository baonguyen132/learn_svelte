<script lang="ts">

</script>

<nav class="side-navigation">
    <ul>
        <li>
            <a href="/private/dashboard">
                <i class='bxr  bx-book-library' style="width: 40px; height: 40px;"></i> 
                Dashboard
            </a>
        </li>
        <li>
            <a href="/private/scan-shelf">
                <i class='bxr  bx-scan' style="width: 40px; height: 40px;"></i> 
                Scan
            </a>
        </li>
        <li>
            <a href="/private/settings">
                <i class='bxr  bx-cog' style="width: 40px; height: 40px;"></i> 
                Settings
            </a>
        </li>
    </ul>
</nav>

<style>
    .side-navigation {
        display: flex;
        border-right: 1px solid grey;
        padding-left: calc(4vw + 16px);
        padding-right: 40px;
        position: sticky;
        padding-top: 40px;
        top: 0;

    }
    .side-navigation ul {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    ul li:not(:last-of-type) {
        margin-bottom: 16px;
    }
    a {
        text-decoration: none;
    }
    
</style>
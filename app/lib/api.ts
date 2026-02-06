export async function fetchAssets() {
    const res = await fetch('/api/assets');

    if(!res.ok){
        throw new Error('Failed to fetch assets');
    }

    return res.json();
}
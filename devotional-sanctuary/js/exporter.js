/* ==========================================================================
   EXCEL & DOC EXPORTER ENGINE FOR DAILY BHAKTI RECORDS
   ========================================================================== */

class SadhanaExporter {
  // Export Sadhana History to Excel CSV / XLSX compatible format
  exportToExcel() {
    const logs = window.sadhana?.logs || [];
    if (logs.length === 0) {
      alert('No sadhana logs available to export. Please log at least one day first!');
      return;
    }

    // Prepare CSV with UTF-8 BOM for seamless Excel opening with special chars
    let csvContent = '\uFEFF';
    csvContent += 'Date,Japa Rounds,Katha / Lecture Heard,Seva Performed,Sloka Learned,Scripture Reading,Devotional Realization\r\n';

    logs.forEach(log => {
      const row = [
        `"${log.date}"`,
        `"${log.rounds}"`,
        `"${(log.katha || '').replace(/"/g, '""')}"`,
        `"${(log.seva || '').replace(/"/g, '""')}"`,
        `"${(log.sloka || '').replace(/"/g, '""')}"`,
        `"${(log.reading || '').replace(/"/g, '""')}"`,
        `"${(log.realization || '').replace(/"/g, '""')}"`
      ];
      csvContent += row.join(',') + '\r\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Daily_Bhakti_Sadhana_Report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (window.soundEngine) window.soundEngine.playBlessingSparkle();
  }

  // Export formatted Word Document (.doc format)
  exportToDoc() {
    const logs = window.sadhana?.logs || [];
    if (logs.length === 0) {
      alert('No sadhana logs available to export.');
      return;
    }

    const todayDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    let docHtml = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>Daily Bhakti & Sadhana Report</title>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; padding: 20px; color: #333; }
          h1 { color: #8B1E2F; text-align: center; margin-bottom: 5px; }
          h3 { color: #D35400; text-align: center; margin-top: 0; }
          .shloka { background: #FFF9ED; border: 1px solid #D4AF37; padding: 12px; text-align: center; font-style: italic; margin: 15px 0; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th { background: #8B1E2F; color: white; padding: 10px; border: 1px solid #ccc; text-align: left; }
          td { padding: 8px 10px; border: 1px solid #ccc; font-size: 13px; }
          tr:nth-child(even) { background-color: #FAF4E8; }
          .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #888; }
        </style>
      </head>
      <body>
        <h1>📿 Daily Bhakti & Sadhana Journal 📿</h1>
        <h3>Hare Krishna Devotional Sanctuary • Generated on ${todayDate}</h3>

        <div class="shloka">
          "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे । हरे राम हरे राम राम राम हरे हरे ॥"<br>
          <em>"Always remember Krishna and never forget Him."</em>
        </div>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Japa Rounds</th>
              <th>Katha / Lecture</th>
              <th>Seva Done</th>
              <th>Sloka Learned</th>
              <th>Reading</th>
              <th>Realization</th>
            </tr>
          </thead>
          <tbody>
            ${logs.map(log => `
              <tr>
                <td><strong>${log.date}</strong></td>
                <td style="color:#D35400; font-weight:bold;">${log.rounds}</td>
                <td>${log.katha || '-'}</td>
                <td>${log.seva || '-'}</td>
                <td>${log.sloka || '-'}</td>
                <td>${log.reading || '-'}</td>
                <td>${log.realization || '-'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div class="footer">
          May Sri Sri Radha & Krishna bless your devotional journey with eternal peace and love! 🙏
        </div>
      </body>
      </html>
    `;

    const blob = new Blob(['\uFEFF' + docHtml], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Devotional_Bhakti_Journal_${new Date().toISOString().split('T')[0]}.doc`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (window.soundEngine) window.soundEngine.playBlessingSparkle();
  }
}

window.exporter = new SadhanaExporter();
